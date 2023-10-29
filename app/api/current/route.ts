import prisma from '@/lib/prisma';
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("You are not authenticated", {status: 403})
    }
    const email = session.user?.email;
    const user = await prisma.user.findUnique({
      where: {
        email: email || undefined,
      }
    })
    if (!user) {
      return NextResponse.json({error: "User not found in database, contact administration"}, {status: 400})
    }

    return NextResponse.json(user, {status: 200})

  } catch (err) {
    return NextResponse.json({error: err}, {status: 400})
  }

}