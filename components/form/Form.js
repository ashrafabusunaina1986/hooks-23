'use client'
import React, { useState } from 'react'
import Input from '../input/Input'
import classes from './form.module.css'
import Button from '../Button/Button'

function Form(props) {
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        age: 0
    })
    const [error, setError] = useState({})
    const changeHandler = (e) => {
        const { id, value } = e.target
        const error={}
        
        if (value<= 0) {
            id==='age' ?error.age = "enter age > 0":''
        }
        if (value.trim().length < 3) {
            id==='firstname'?error.firstname = 'enter first name >3 letters':''
        }
        if (value.trim().length < 3) {
            id==='lastname'?error.lastname = 'enter last name >3 letters':''
        }
        setError(error)

        setInput({
            ...input, [id]: value
        })
    }
    const addinfoHandler = e => {
        e.preventDefault()
        const error = {}
        if (input.age <= 0 || input.firstname.trim().length < 3 || input.lastname.trim().length < 3) {
            if (input.age <= 0) {
                error.age = "enter age > 0"
            }
            if (input.firstname.trim().length < 3) {
                error.firstname = 'enter first name >3 letters'
            }
            if (input.lastname.trim().length < 3) {
                error.lastname = 'enter last name >3 letters'
            }
            setError(error)
        } else {
            fetch('/api/info', {
                body: JSON.stringify(input),
                method: 'POST'
            }).then(res => res.json()).then(data => {
                window.location.reload()
            })
                .catch(error => console.error(error))
        }
    }
    return (
        <form className={classes.form} onSubmit={addinfoHandler}>
            {error.firstname && <div className={classes.error}>{error.firstname} </div>}
            <Input input={{
                title: 'First name',
                id: 'firstname',
                type: 'text',
                onChange: (e) => changeHandler(e),
                value: `${input.firstname}`
            }} />
            {error.lastname && <div className={classes.error}>{error.lastname} </div>}
            <Input input={{
                title: 'Last name',
                id: 'lastname',
                type: 'text',
                onChange: (e) => changeHandler(e),
                value: `${input.lastname}`
            }} />
            {error.age && <div className={classes.error}>{error.age} </div>}
            <Input input={{
                title: 'Age',
                id: 'age',
                type: 'number',
                onChange: (e) => changeHandler(e),
                value: input.age
            }} />
            <Button>Save</Button>
        </form>
    )
}

export default Form