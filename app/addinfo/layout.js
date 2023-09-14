'use client'
import Form from '@/components/form/Form'
import React, { useState } from 'react'
import AddInfo from './page'

const Layout = (props) => {
  const [error,setError]=useState({})
  return (
    <div>
        <Form setError={setError}/>
        <AddInfo error={error}/>
    </div>
  )
}

export default Layout