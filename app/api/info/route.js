import fs from 'fs'
import info from '../../../public/api/example.json'
import path from 'path'
import { NextResponse } from 'next/server'



export const GET = async (request) => {
    // const body=await request.json()
    // info.push(await body)
    // fs.promises.writeFile()
    return NextResponse.json({ info }, { status: 200 })
}
export const POST = async (request) => {
    const filepath = path.join(__dirname, '../../../../../public/api/example.json')
    console.log(filepath)
    const body = await request.json()
    const inf = await body
    info.push({
        id: info.length,
        'First name': inf.firstname,
        'Last name': inf.lastname,
        Age: Number(inf.age)
    })
    try {
        fs.writeFileSync(filepath, JSON.stringify(info,null,2), 'utf-8')
        return NextResponse.json({ meesage: "ok" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ meesage: error }, { status: 500 })
    }


}