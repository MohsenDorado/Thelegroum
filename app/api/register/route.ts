import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

import prisma from "../../libs/prismadb";

export async function POST(request: Request){
try {
    const body = await request.json();
    const { email, name, password } = body;
  
    if (!email || !name || !password) {
    return new NextResponse('Missing info',{status:400})  
    }
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
  
    return NextResponse.json(user);
    
    
} catch (error:any) {
    console.log(error, 'Registration Error On register route');
    return new NextResponse('Internal error Please try again later',{status:500});
    
    
} 

}