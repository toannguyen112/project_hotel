import React from 'react'
import Search from '../components/Search'

function Header() {
    return (
        <div className="flex items-center py-4 text-md">
        <img src="./logo.png" alt="" />
      <Search/>
      </div>
    )
}

export default Header
