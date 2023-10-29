import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
  try{
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("You are not authenticated", { status: 403 });
    }

    const email = session.user?.email;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {
        email: email || undefined,
      },
    });

    if (!user) {
      return new NextResponse("User does not exist in DB", { status: 503 });
    }
    const favorites = user.favoriteRecipes;

    return NextResponse.json({
      favorites
    }, {status: 200})
  } catch (err){
    return NextResponse.json({
      msg: err
    }, {status: 400})
  }
}