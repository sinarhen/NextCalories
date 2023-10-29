import prisma from '@/lib/prisma';
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {getProduct} from "@/utils/get-recipe";

export async function POST(request: NextRequest, {params}: { params: { productId: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("You are not authenticated", {status: 403});
    }
    // Verify that the recipe ID exists and is valid

    const recipe = await getProduct(params.productId);

    if (!recipe) {
      return new NextResponse("Product ID is invalid", {status: 400});
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
    const favorites = user.favoriteProducts;

    if (favorites.includes(params.productId)) {
      return new NextResponse("Recipe ID is already in favorites", {status: 400});
    }

    // Add the new recipe ID to the user's favorites list
    const updatedUser = await prisma.user.update({
      where: {
        email: email || undefined,
      },
      data: {
        favoriteProducts: {
          // Use the Prisma "push" method to add a new item to the favorites array
          push: params.productId,
        },
      },
    });

    return NextResponse.json({msg: "Product added to favorites", data: updatedUser}, {status: 200});

  } catch (err) {
    return new NextResponse(JSON.stringify({error: err}), {status: 400});
  }
}


export async function DELETE(request: NextRequest, {params}: { params: { productId: string } }) {
  const {productId} = params;

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

    const favorites = user.favoriteProducts;

    const updatedFavorites = favorites.filter(fav => fav !== productId);
    if (updatedFavorites === favorites) {
      return NextResponse.json({msg: "Recipe is not added to pavorites"}, {status: 400});
    }
    const updatedUser = await prisma.user.update({
      where: {
        email: email || undefined,
      },
      data: {
        favoriteProducts: updatedFavorites,
      },
    });

    return NextResponse.json({msg: "Recipe removed from favorites", data: updatedUser}, {status: 200});

  } catch (err: any) {
    return new NextResponse(JSON.stringify({error: err.message}), {status: 400});
  }
}