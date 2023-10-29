import prisma from '@/lib/prisma';
import {NextRequest, NextResponse} from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest){
    const data = await request.json()
    const {email, name, password} = data;
    console.log(data);
    if (!name){
        return NextResponse.json({error: "Name is required", field: 'name'}, {status: 400})
    }
    if (!password){
        return NextResponse.json({error: "Password is required", field: 'password'}, {status: 400})
    }
    if (!email){
        return NextResponse.json({error: "Email is required", field: 'email'}, {status: 400})
    }
    if (password.length < 8){
        return NextResponse.json({error: "Password length must be more more or equal 8", field: 'password'}, {status: 400})
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })  
        if (user){
            return NextResponse.json({error: "User with that email already exists.", field: "email"}, {status: 400})
        }  
        const hashedPassword = await bcrypt.hash(password, 10);   
        
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        return NextResponse.json(newUser, {status: 200})
    
    } catch (err){
        return NextResponse.json({error: err}, {status: 400})
    }
    
}