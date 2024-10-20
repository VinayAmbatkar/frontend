import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Musseum from './pages/Musseum'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import MyBookings from './pages/MyBookings'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Musseum' element={<Musseum />} />
        <Route path='/Musseum/:speciality' element={<Musseum />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Booking/:docId' element={<Booking />} />
        <Route path='/my-Bookings' element={<MyBookings />} />
        <Route path='/my-profile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App