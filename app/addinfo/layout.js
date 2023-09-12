import Form from '@/components/form/Form'
import React from 'react'

const Layout = (props) => {
  return (
    <div>
        <Form/>
        {props.children}
    </div>
  )
}

export default Layout