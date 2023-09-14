import { NextResponse } from 'next/server'
import info from '../../../public/api/example.json'
import fs from 'fs'
import path from 'path'

export const DELETE=async(request)=>{
    const filepath =path.join(__dirname,'../../../../../public/api/example.json')
    const body=await request.json()
    const id=await body
    const del=info.filter(inf=>inf.id!==id.id)
    if(del){
        fs.writeFile(filepath,JSON.stringify(del),'utf-8',error=>{
            if(error)return  NextResponse.json({m:error},{status:404}) 
        })
        return NextResponse.json({m:'ok',info},{status:200})
    }else{
        return NextResponse.json({m:'error'},{status:404})
    }
    
} 