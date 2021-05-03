import React from 'react'
import { useDispatch } from 'react-redux';

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full px-2 py-3 bg-gray-110 rounded-sm flex-items-center">
      <div className="flex items-center justify-between ">
        <input
          type="text"
          placeholder="Tìm kiếm khách sạn"
          className="w-full bg-gray-110 border-none outline-none text-black-100"
        />

        <div className="font-bold cursor-pointer text-md" onClick={() => dispatch({ type: "OPEN_SEARCH" })}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
