import { Listing, Reservation } from '@prisma/client'
import React from 'react'

interface ListingCardProps{
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string)
}

const ListingCard = () => {
  return (
    <div>
       Listing Card
    </div>
  )
}

export default ListingCard
