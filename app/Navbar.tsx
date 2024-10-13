import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='mt-5 px-5 flex justify-between items-center '>
      <h1 className='text-5xl font-bold'>Notes.</h1>
      <a className='bg-blue-700 px-4 py-2 text-2xl rounded-lg font-semibold '  href='/notes' >New Note</a>
    </div>
  )
}

export default Navbar