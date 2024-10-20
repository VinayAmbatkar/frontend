import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Musseum = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [searchQuery, setSearchQuery] = useState('') // State to store search input
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { Musseum } = useContext(AppContext)

  const applyFilter = () => {
    let filtered = Musseum

    // Apply speciality filter
    if (speciality) {
      filtered = filtered.filter(doc => doc.speciality === speciality)
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilterDoc(filtered)
  }

  useEffect(() => {
    applyFilter()
  }, [Musseum, speciality, searchQuery]) // Include searchQuery in dependencies

  return (
    <div>
      <p className='text-gray-600'>Browse through the Museum specialists.</p>

      {/* Search Bar */}
      <div className='my-4'>
        <input
          type='text'
          placeholder='Search by museum name...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded'
        />
      </div>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>
          Filters
        </button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Art Museum' ? navigate('/Musseum') : navigate('/Musseum/Art Museum')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Art Museum' ? 'bg-indigo-100 text-black ' : ''}`}>Art Museum</p>
          <p onClick={() => speciality === 'History Museum' ? navigate('/Musseum') : navigate('/Musseum/History Museum')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'History Museum' ? 'bg-indigo-100 text-black ' : ''}`}>History Museum</p>
          <p onClick={() => speciality === 'Natural History Museum' ? navigate('/Musseum') : navigate('/Musseum/Natural History Museum')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Natural History Museum' ? 'bg-indigo-100 text-black ' : ''}`}>Natural History Museum</p>
          <p onClick={() => speciality === 'Science Museum' ? navigate('/Musseum') : navigate('/Musseum/Science Museum')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Science Museum' ? 'bg-indigo-100 text-black ' : ''}`}>Science Museum</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div onClick={() => { navigate(`/Booking/${item._id}`); window.scrollTo(0, 0) }} className='border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-indigo-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                  <p className='text-zinc-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-gray-500'>No museums found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Musseum
