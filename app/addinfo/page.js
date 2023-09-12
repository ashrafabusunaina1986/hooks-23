'use client'
import React, { useEffect, useState } from 'react'
import classes from './page.module.css'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'

const page = (props) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getInfo()
  }, [])
  const getInfo = async () => {
    const res = await fetch('/api/info')
    const data = await res.json()
    setInfo(data)
    console.log(data)
  }
  return (
    info.info && info.info.length > 0 && <div className={classes.main}>
      {info.info.map(ti => {
        return <div key={ti.id} className={classes.item} >
          <div className={classes.content}>

            <span>Name is {`${ti["First name"]} ${ti['Last name']}`}</span>
            <span>Age is {ti.Age} year old</span>
          </div>
          <div className={classes.icon}>
            <AiFillDelete/>
            <AiFillEdit/>
          </div>
        </div>
      })}
    </div>

  )
}

export default page