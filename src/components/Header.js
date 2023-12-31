import React from 'react'

export default function Header({ handleSearch }) {
  return (
    <div className='header'>
      <h1>Chris's Music Store</h1>
      <input
        type='text'
        placeholder='Search products'
        onChange={handleSearch}
      />
    </div>
  )
}