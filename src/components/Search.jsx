import React from 'react'

function Search() {
    return (
        <div className="w-full h-full px-2 py-3 bg-gray-100 rounded-sm flex-items-center">
        <div className="flex items-center justify-between ">
          <input
            type="text"
            placeholder="Tìm kiếm khách sạn"
            className="w-full bg-gray-100 border-none outline-none"
          />
          <div className="font-bold cursor-pointer text-md">
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
}

export default Search
