'use client';
import React, { useState } from 'react'
import Modals from './Modals'
import useRentModal from '@/app/hooks/useRentModal'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step,setStep] = useState(STEPS.CATEGORY)

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
