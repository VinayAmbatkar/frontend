import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>HAVE A QUESTION?</p>
          <p className=' text-gray-500'>If you have any queries or need assistance with booking your museum tickets, just send us a message. We're here to help!</p>
          <p className=' text-gray-500'>Message us directly at: <br /> <b>(415) 555-0123</b></p>
          <p className=' text-gray-500'>Or email us at: <br /> support@museumbookingsystem.com</p>
        </div>
      </div>

    </div>
  )
}

export default Contact
