import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>This project, MuseumBooking, is our final year group project as part of our B.Tech in Computer Engineering. Our team has developed this platform to provide users with an easy and efficient way to explore and book tickets for top museums around the world.</p>
          <p>Throughout this project, we have focused on enhancing user experience by integrating the latest web technologies, ensuring that users can quickly access information on museums, exhibitions, and events. MuseumBooking aims to bridge the gap between technology and culture, making it simple for anyone to explore the world of museums with just a few clicks.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision for MuseumBooking is to create a seamless and intuitive platform that not only helps users book tickets but also encourages more people to engage with art, history, and culture. We hope our project can contribute to the growing relationship between technology and cultural exploration.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined ticket booking with a user-friendly design.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access to a variety of museums and exhibitions worldwide in one place.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations for museum visits based on user interests.</p>
        </div>
      </div>

    </div>
  )
}

export default About
