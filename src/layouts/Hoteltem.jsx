import React from 'react'

function Hoteltem() {
    return (
        <div className="flex py-4 border-b border-gray-200 cursor-pointer ">
        <div>
          <img src="./hotel.png" alt="" className="rounded-md" />
          <div className="text-center text-white bg-red-400 rounded-md py-1.5 mt-3">
            Xem phòng
          </div>
        </div>
        <div className="flex flex-col justify-between w-full pl-6">
          <div>
            <div className="text-xl font-bold text-gray-600">
              Bonita Hùng Vương Quận 5
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-300 ">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="flex items-center ml-4 text-sm text-gray-600 ">
                <i className="fa fa-star"></i>
                86
              </div>

              <div className="flex items-center ml-4 text-sm text-gray-600 ">
              <i className="fa fa-comment" aria-hidden="true"></i>

                61
              </div>
            </div>
            <div className="flex items-center my-2 text-gray-500">
              <i className="mr-3 fa fa-map-marker" aria-hidden="true"></i>
              <span className="text-sm">88B Hùng Vương , Hồ Chí Minh</span>
            </div>
            <div className="flex items-center my-2 text-gray-500">
            <i className="mr-3 fa fa-location-arrow" aria-hidden="true"></i>
              <span className="text-sm">Cách bạn 1.14km</span>
            </div>
          </div>

          <div className="flex justify-end text-gray-400 ">
            <div>
              <p>Không bán theo giờ</p>
              <p>
                Qua đêm:{" "}
                <span className="font-bold text-yellow-400">300.000đ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hoteltem
