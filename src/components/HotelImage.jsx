import React from 'react'

function HotelImage() {
  return (
    <div className="relative overflow-hidden rounded-md cursor-pointer sm:col-span-4 col-span-12">
      <img
        width="250"
        src="https://quickstay.vn/uploads/thumbnail/phppnWaYn.jpg"
        alt=""
      />
      <div className="absolute bottom-0 left-0 px-2">
        <p className="font-bold text-white text-md">Rose hotel</p>
        <div className="flex text-white">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span className="ml-2 text-sm">
            Số 117 Lê Lai, phường Bến Thành, Quận 1, TP Hồ Chí Minh
            </span>
        </div>
      </div>
    </div>
  )
}

export default HotelImage
