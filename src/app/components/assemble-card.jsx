'use client'

import React, { useState } from 'react'
import ItemCard from './Item-card'
import MyModal from './modal'

export default function AssembleCard({ items }) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedItem(null)
  }

  return (
    <React.Fragment>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            <ItemCard
              setSelectedItem={setSelectedItem}
              item={item}
              openModal={openModal}
            />
          </React.Fragment>
        ))}
      </div>
      {selectedItem && (
        <MyModal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
      )}
    </React.Fragment>
  )
}
