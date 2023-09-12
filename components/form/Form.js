'use client'
import React, { useState } from 'react'
import Input from '../input/Input'
import classes from './form.module.css'
import Button from '../Button/Button'

function Form(props) {
    const [input,setInput]=useState({
        firstname:'',
        lastname:'',
        age:0
    })
    const changeHandler=(e)=>{
        const {id,value}=e.target
        setInput({
            ...input,[id]:value
        })
    }
    const addinfoHandler=e=>{
        e.preventDefault()
        fetch('/api/info',{
            body:JSON.stringify(input),
            method:'POST'
        }).then(res=>res.json()).then(data=>{
            window.location.reload()
        })
        .catch(error=>console.error(error))
    }
  return (
    <form className={classes.form} onSubmit={addinfoHandler}>
        <Input input={{
            title:'First name',
            id:'firstname',
            type:'text',
            onChange:(e)=>changeHandler(e),
            value:`${input.firstname}`
        }}/>
        <Input input={{
            title:'Last name',
            id:'lastname',
            type:'text',
            onChange:(e)=>changeHandler(e),
            value:`${input.lastname}`
        }}/>
        <Input input={{
            title:'Age',
            id:'age',
            type:'number',
            onChange:(e)=>changeHandler(e),
            value:input.age
        }}/>
        <Button>Save</Button>
    </form>
  )
}

export default Form