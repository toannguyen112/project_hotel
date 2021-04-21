import React from 'react'
import { Link } from 'react-router-dom'

function ButtonMore() {
  return (
    <Link to='/listhotel' className="flex justify-center">
      <div className="p-2 my-2 font-bold text-yellow-600 uppercase rounded-md cursor-pointer bg-red-50">
        Xem thêm
        </div>
    </Link>
  )
}

export default ButtonMore
