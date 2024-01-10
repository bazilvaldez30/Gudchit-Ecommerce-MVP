import React from 'react'

const MyButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
    >
      {children}
    </button>
  )
}

export default MyButton
