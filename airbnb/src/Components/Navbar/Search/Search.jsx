import React from 'react'

const Search = () => {
  return (
    <>
        <div className='border border-black h-14 my-8 w-3/4 rounded-3xl flex justify-between items-center px-5 m-auto'>
            <div>
                <h1 className='font-semibold'>Where</h1>
                <h1>Search Destination</h1>
            </div>
            <div>
                <h1 className='font-semibold'>Check In</h1>
                <h1>Add Dates</h1>
            </div>
            <div>
                <h1 className='font-semibold'>Check Out</h1>
                <h1>Add Dates</h1>
            </div>
            <div>
                <h1 className='font-semibold'>Who</h1>
                <h1>Add Guests</h1>
            </div>
            <div className='rounded-full h-12 -12 overflow-hidden'>
                <img src="https://res.cloudinary.com/dqh8wwun7/image/upload/v1728296867/search_tvazam.png" alt="" className='h-full w-full object-cover rounded-full'/>
            </div>
        </div>
    </>
  )
}

export default Search