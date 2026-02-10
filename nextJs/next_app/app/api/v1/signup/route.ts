import { NextResponse } from "next/server";

export async function POST(req:NextResponse){
    const data = await req.json();

    return NextResponse.json({

    }) 
}