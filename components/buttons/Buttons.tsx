import React from 'react'

const Buttons = ({text} : {text:string}) => {
  return (
    <button className='bg-button-color my-3 p-4 w-full text-white rounded-lg'> {text}</button>
  )
}

export default Buttons