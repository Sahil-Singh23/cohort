import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json({
    user: "sahil",
    email: "sahil1@gmail.com"
  })
}

export function POST(){
  return NextResponse.json({
    user: "sahil",
    email: "sahil1@gmail.com"
  })
}