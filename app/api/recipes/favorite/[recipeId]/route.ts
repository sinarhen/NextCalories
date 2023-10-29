import prisma from '@/lib/prisma';
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {getRecipe} from "@/utils/get-recipe";

export async function POST(request: NextRequest, {params}: { params: { recipeId: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("You are not authenticated", {status: 403});
    }
    // Verify that the recipe ID exists and is valid

    console.log("request with recipe id " + params.recipeId)
    const recipe = await getRecipe(params.recipeId);

    if (!recipe) {
      return new NextResponse("Recipe ID is invalid", {status: 400});
    }
    const email = session.user?.email;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {
        email: email || undefined,
      },
    });

    if (!user) {
      return new NextResponse("User does not exist in DB", {status: 503});
    }
    const favorites = user.favoriteRecipes;

    if (favorites.includes(params.recipeId)) {
      return new NextResponse("Recipe ID is already in favorites", {status: 400});
    }

    // Add the new recipe ID to the user's favorites list
    const updatedUser = await prisma.user.update({
      where: {
        email: email || undefined,
      },
      data: {
        favoriteRecipes: {
          // Use the Prisma "push" method to add a new item to the favorites array
          push: params.recipeId,
        },
      },
    });

    return NextResponse.json({msg: "Recipe added to favorites", data: updatedUser}, {status: 200});

  } catch (err) {
    return new NextResponse(JSON.stringify({error: err}), {status: 400});
  }
}


export async function DELETE(request: NextRequest, {params}: { params: { recipeId: string } }) {
  const {recipeId} = params;

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("You are not authenticated", {status: 403});
    }

    const email = session.user?.email;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {
        email: email || undefined,
      },
    });

    if (!user) {
      return new NextResponse("User does not exist in DB", {status: 503});
    }

    const favorites = user.favoriteRecipes;

    const updatedFavorites = favorites.filter(fav => fav !== recipeId);
    if (updatedFavorites === favorites) {
      return NextResponse.json({msg: "Recipe is not added to favorites"}, {status: 400});
    }
    const updatedUser = await prisma.user.update({
      where: {
        email: email || undefined,
      },
      data: {
        favoriteRecipes: updatedFavorites,
      },
    });

    return NextResponse.json({msg: "Recipe removed from favorites", data: updatedUser}, {status: 200});

  } catch (err: any) {
    return new NextResponse(JSON.stringify({error: err.message}), {status: 400});
  }
}