// import {NextRequest, NextResponse} from "next/server";
// import {getServerSession} from "next-auth";
// import {authOptions} from "@/lib/auth";
// import {getRecipe} from "@/utils/get-recipe";
// import fetcher from "@/lib/fetcher";
//
// export async function POST(request: NextRequest, {params}: { params: { recipeId: string } }) {
//   try {
//
//     const data = await fetcher({
//       url: `https://api.edamam.com/api/recipes/v2/${params.recipeId}`,
//       params: {
//         type: 'public',
//         app_id: process.env.EDAMAM_RECIPES_API_ID,
//         app_key: process.env.EDAMAM_RECIPES_API_KEY,
//       }
//
//     })
//     if (!data) {
//       return new NextResponse("Recipe ID is invalid", {status: 400});
//     }
//     return NextResponse.json({msg: "Recipe added to favorites", data: updatedUser}, {status: 200});
//
//   } catch (err) {
//     return new NextResponse(JSON.stringify({error: err}), {status: 400});
//   }
// }
//
//
// export async function DELETE(request: NextRequest, {params}: { params: { recipeId: string } }) {
//   const {recipeId} = params;
//
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return new NextResponse("You are not authenticated", {status: 403});
//     }
//
//     const email = session.user?.email;
//
//     // Find the user in the database
//     const user = await prisma.user.findUnique({
//       where: {
//         email: email || undefined,
//       },
//     });
//
//     if (!user) {
//       return new NextResponse("User does not exist in DB", {status: 503});
//     }
//
//     const favorites = user.favoriteRecipes;
//
//     const updatedFavorites = favorites.filter(fav => fav !== recipeId);
//     if (updatedFavorites === favorites) {
//       return NextResponse.json({msg: "Recipe is not added to favorites"}, {status: 400});
//     }
//     const updatedUser = await prisma.user.update({
//       where: {
//         email: email || undefined,
//       },
//       data: {
//         favoriteRecipes: updatedFavorites,
//       },
//     });
//
//     return NextResponse.json({msg: "Recipe removed from favorites", data: updatedUser}, {status: 200});
//
//   } catch (err: any) {
//     return new NextResponse(JSON.stringify({error: err.message}), {status: 400});
//   }
// }