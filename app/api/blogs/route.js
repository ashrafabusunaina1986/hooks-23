import { NextRequest, NextResponse } from "next/server";
import {Posts} from '@/public/api/d'

export async function GET(request) {
  const post=Posts
  return NextResponse.json({message:'Ok',post},{status:200})
}
export async function POST(req) {
  const body=await req.json()
  console.log((body))
  return  NextResponse.json({message:'Ok',body},{status:200})
}