import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params }: { params: { routes?: string[] } }){
    
    return NextResponse.json({
        message: "hello",
        routes: params.routes || []
    })
}