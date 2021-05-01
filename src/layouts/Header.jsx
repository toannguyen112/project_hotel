import React from 'react'
import SearchBar from '../components/SearchBar'

function Header() {
  return (
    <div className="flex items-center py-4 text-md">
      <img src="./logo.png" alt="" />
      <SearchBar />
    </div>
  )
}

export default Header
