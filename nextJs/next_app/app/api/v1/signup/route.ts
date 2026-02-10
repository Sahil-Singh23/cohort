import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client.js";
import { prismaClient } from "@/lib/prisma";


export async function POST(req:NextResponse){
    const data = await req.json();
    try{
        await prismaClient.user.create({
        data:{
            username: data.user,
            password: data.password
        }
    })
    }catch(e){
        return NextResponse.json({
        message: "failed  "
    }) 
    }
    

    return NextResponse.json({
        message: "you have signed up"
    }) 
}

export 