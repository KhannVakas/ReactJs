import React from 'react'

const NavigationBar = (props) => {
    console.log(props.num)
  return (
    <div className='bg-red-200'>NavigationBar {props.num}</div>
  )
}

export default NavigationBar 