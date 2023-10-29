import prisma from '@/lib/prisma';
import {NextRequest, NextResponse} from "next/server";
import isEmpty from "lodash/isEmpty";

export async function PATCH(request: NextRequest, {params}: {params: {userId: string}}) {
  const data = await request.json()
  const {name, image} = data;
  const id = params.userId;
  if (!name){
    return NextResponse.json({error: "Name is required", field: 'name'}, {status: 400})
  }
  try {
    const nameAlreadyExists = await prisma.user.findMany({
      where: {
        name,
        id: {not: id}
      },
    })

    if (!isEmpty(nameAlreadyExists)){
      return NextResponse.json({error: "User with that name already exists.", field: "name"}, {status: 400})
    }
    console.log("[ID] is ",id)
    const user = await prisma.user.update({
      where: {
        id
      }, data: {
        name,
        image
      }
    })
    console.log(user)
    return NextResponse.json(user, {status: 200})

  } catch (err){
    return NextResponse.json({error: err}, {status: 400})
  }

}