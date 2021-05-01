import React from 'react'
import { Link } from 'react-router-dom'

function Hoteltem({ props }) {
  function renderStar(startLength) {
    var html = [];
    for (let i = 0; i < startLength; i++) {
      html.push(<i className="fa fa-star"></i>)
    }
    return html;
  }
  return (
    <div className="flex py-20 border-b border-gray-200 cursor-pointer col-span-12 ">
      <div className=''>
        <img src={props.image} alt="" className="rounded-md" />
        <Link to={`/hotel/${props.id}`}>
          <div className="text-center text-white bg-red-400 rounded-md py-1.5 mt-3"> Xem phòng</div>
        </Link>
      </div>
      <div className="flex flex-col justify-between w-full pl-6">
        <div className='pl-20'>
          <div className="text-xl font-bold text-gray-600">
            {props.hotel_name}
          </div>
          <div className="flex items-center space-x-20">
            <div className="flex text-yellow-300 ">

              {renderStar(props.star)}
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
            <span className="text-sm"> {props.company.address} </span>
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
              Qua đêm:
              <span className="font-bold text-yellow-400">{props.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hoteltem
