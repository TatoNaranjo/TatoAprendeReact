import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white font-bold text-center p-3 uppercase mb-3 rounded xl'>
    <p>{mensaje}</p>
    </div>
  )
}

export default Error