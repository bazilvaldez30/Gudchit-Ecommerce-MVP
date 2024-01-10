import React from 'react'
import Modal from 'react-modal'
import MyButton from './my-button'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { formatDateTime } from '../../../lib/utility'

const MyModal = ({ selectedItem, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-900 bg-white rounded shadow-md w-full max-w-4xl dark:text-white p-9 scale-90'
      /*  overlayClassName='fixed inset-0 bg-gray-800' */
    >
      <div className='flex justify-between items-center mb-5'>
        <h2 className='text-2xl font-bold text-center'>
          {selectedItem?.name.toUpperCase()}
        </h2>
        <button
          onClick={closeModal}
          className='text-gray-500 hover:text-gray-700'
        >
          <AiOutlineClose className='w-6 h-6' />
        </button>
      </div>
      <div className=' space-y-5'>
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className='w-full h-52 object-cover mb-4 rounded-md'
        />
        <p>DETAILS:</p>
        <hr />
        <div>
          <p>
            <span className='font-bold'>Type:</span> {selectedItem?.type}
          </p>
          <p>
            <span className='font-bold'>Start Date:</span>{' '}
            {formatDateTime(selectedItem?.startDate)}
          </p>
          <p>
            <span className='font-bold'>End Date:</span>{' '}
            {formatDateTime(selectedItem?.endDate)}
          </p>
          <p>
            <span className='font-bold'>Menu Type:</span>{' '}
            {selectedItem?.menuType}
          </p>
        </div>
        <p>RECURRING:</p>
        <hr />
        <div>
          <p>
            <span className='font-bold'>Days:</span> {selectedItem?.days}
          </p>
          <p>
            <span className='font-bold'>Start Time:</span>{' '}
            {selectedItem?.start_time}
          </p>
          <p>
            <span className='font-bold'>End Time:</span>{' '}
            {selectedItem?.end_time}
          </p>
        </div>

        <MyButton>
          <Link href={'/shop'}>SHOP NOW!</Link>
        </MyButton>
      </div>
    </Modal>
  )
}

export default MyModal
