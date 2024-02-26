'use client'
import React from 'react'
import ListUsers from './ListUsers'
import MinBar from '@/app/seller/components/MinBar/MinBar'
const page = () => {
  return (
    <div>
      <MinBar/>
       <ListUsers/>
      
    </div>
  )
}

export default page