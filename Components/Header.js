"use client"
import { MyContext } from '@/Helper/Context';
import Nav from './Nav'
import React, { useContext } from 'react';
const Header = (props) => { // props will be an object
    // console.log(props);
    // console.log(props.num);
    
    const user = useContext(MyContext)
    
  return (
    <div className='bg-green-200 p-5'>
      {/* Me hu Header
        <Nav num={props.num}/> *Header say nav me data dalna */}

        {user}
    </div>
  )
}

export default Header