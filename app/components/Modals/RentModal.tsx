'use client';
import React from 'react'
import Modals from './Modals'
import useRentModal from '@/app/hooks/useRentModal'


const RentModal = () => {
    const rentModal = useRentModal();
  return (
    <div>
      <Modals 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel='Submit'
        title='SF Home'
      />
    </div>
  )
}

export default RentModal
