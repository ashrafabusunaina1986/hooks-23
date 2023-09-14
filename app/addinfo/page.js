'use client'
import React, { useEffect, useState } from 'react'
import classes from './page.module.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const page = (props) => {
  const [info, setInfo] = useState([])

  useEffect(async () => {
    setInfo(await getInfo())
    return
  }, [])
  const getInfo = async () => {
    const res = await fetch('/api/info')

    if (!res.ok) {
      throw new Error('Wrong went something')
    }

    return await res.json()
  }

  const deleteHandler = async (id) => {
    const res = await fetch(`/api/delete`, {
      method: 'DELETE',
      body: JSON.stringify({ id: id })
    })
    const d = await res.json()
    if (d) {
      setInfo(await getInfo())
     // window.location.reload()
    }
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
            <AiFillDelete onClick={() => deleteHandler(ti.id)} />
          </div>
        </div>
      })}
    </div>

  )
}

export default page