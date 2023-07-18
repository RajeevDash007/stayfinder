'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

interface EmptyState{
    title?: string;
    subtitle?:string;
    showReset?: boolean;
}

const  EmptyState: React.FC<EmptyState> =  ({
    title = "No Listings Found",
    subtitle = "Try to find something else",
    showReset
}
) => {
    const router = useRouter();
  return (
    <div
        className='
            h-[60vh]
            flex
            flex-col
            gap
            justify-center
            items-center
        '
    >
      <Heading 
        title={title}
        subtitle={subtitle}
      />
      <div className='w-48 mt-4'>
            {showReset && (
                <Button
                    outline
                    label='Remove all filters'
                    onClick={() => router.push('/')}
                />
            )}
      </div>
    </div>
  )
}

export default EmptyState
