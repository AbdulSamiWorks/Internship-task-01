import React from 'react'

const Button = ({title ,width}) => {
  return (
   <>
    <button className={`mr-40 p-3 w-${width}  rounded-lg bg-yellow-500 text-black font-normal hover:bg-yellow-400 transition delay-150 duration-150 ease-in-out`}>{title}</button>
   </>
  )
}

export default Button