import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-100' src={assets.logo} alt="Museum Booking Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Discover and book tickets to world-class museums with ease. Our platform offers a seamless way to explore history, art, and culture from the comfort of your home.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>MUSEUMS</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Top Museums</li>
            <li>Exhibitions</li>
            <li>Special Tours</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACT US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>support@museumbookingsystem.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ MuseumBooking.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
