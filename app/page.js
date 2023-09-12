'use client'
import Image from 'next/image'
import styles from './page.module.css'

import { useEffect, useState } from 'react'
import Button from '@/components/Button/Button'

export default function Home({data}) {
  const [info,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    await fetch('/api/example.json')
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      console.log(data)}
    )

    return data
  }
  
  const POSTData=async()=>{
    
    const res =await  fetch('/api/blogs',{
      method:'POST',
      body:JSON.stringify({
        id:"34f5ft",
        hello:'world'
      })
    })
    console.log(await res.json())
  }
  return (
    <main>
      
        <Button onClick={POSTData}>Action</Button>
      
      {
        info && info.map(i=>{
          return <div key={i.id}>
            {i.name}
          </div>
        })
      }
    </main>
  )
}


