import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ItemCard = ({ item, setSelectedItem, openModal }) => {
  const handleClick = (item) => {
    console.log(item)
    setSelectedItem(item)
    openModal()
  }

  return (
    <button
      onClick={() => handleClick(item)}
      className='dark:bg-gray-800 bg-white p-4 mb-4 rounded-md shadow-md focus:scale-[1.05] hover:scale-[1.05] active:scale-105 opacity-80 hover:opacity-100'
    >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-36 object-cover mb-4 rounded-md'
      />
      <h3 className='text-xl font-semibold mb-2 capitalize'>{item.name}</h3>
    </button>
  )
}

export default ItemCard
