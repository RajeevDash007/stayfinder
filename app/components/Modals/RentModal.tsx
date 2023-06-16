'use client';
import React, { useMemo, useState } from 'react'
import Modals from './Modals'
import useRentModal from '@/app/hooks/useRentModal'
import Heading from '../Heading';
import { categories } from '../Navbar/Categories';
import CategoryInput from '../inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';
import CountrySelect from '../inputs/CountrySelect';
import dynamic from 'next/dynamic';
import Counter from '../inputs/Counter';

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

    const{
      register,
      handleSubmit,
      setValue,
      watch,
      formState: {
        errors,
      },
      reset
    } = useForm<FieldValues>({
      defaultValues: {
        category: '',
        location: null,
        guestCount: 1,
        roomCount: 1,
        bathroomCount: 1,
        imageSrc: '',
        price: 1,
        title: '',
        description: ''
      }
    });

    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('guestCount');

    const Map = useMemo(() => dynamic(() => import('../Map'),{
      ssr:false
    }),[location]);

    const setCustomValue = (id: string, value: any) => {
      setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true
      })
    }

    const onBack = () => {
      setStep((value) =>  value - 1)
    };

    const onNext = () => {
      setStep((value) => value + 1)
    }

    const actionLabel = useMemo(() =>{
      if(step == STEPS.PRICE){
        return 'Create';
      }
      return 'Next';
    },[step]);

    const secondaryActionLabel = useMemo(() => {
      if(step == STEPS.CATEGORY){
        return undefined;
      }
      return 'Back';
    },[step]);

    let bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading 
          title='How would you describe your place?'
          subtitle='Select a specific category.'
        />
        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
          '
        >
          {categories.map((item)=>(
              <div key={item.label} className='col-span-1'>
                  <CategoryInput 
                      onClick={(category) => setCustomValue('category', category)}
                      selected={category == item.label}
                      label={item.label}
                      icon={item.icon}
                  />
              </div>
          ))}
        </div>
      </div>
    )

    if(step == STEPS.LOCATION){
      bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading 
              title='Location of your Home'
              subtitle='Help your guests find you'
            />

            <CountrySelect 
              value={location}            
              onChange={(value) => setCustomValue('location', value)}
            />
            <Map 
              center={location?.latlng}
            />
        </div>
      )
    }

    if(step == STEPS.INFO){
      bodyContent = (
        <div className='flex flex-col gap-8'>
          <Heading
              title='Share some information about your place'
              subtitle='What amenities do you have?'
          />
          <Counter 
            title='Stayers'
            subtitle='how many guests do you allow?'
            value={guestCount}
            onChange={(value) => setCustomValue('guestCount',value)}
          />
        </div>
      )
    }

  return (
    <div>
      <Modals 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={onNext}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step == STEPS.CATEGORY ? undefined : onBack }
        title='SF Home'
        body={bodyContent}
      />
    </div>
  )
}

export default RentModal
