import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'
function Hoteltem({ props }) {
  function renderStar(startLength) {
    var html = [];
    for (let i = 0; i < startLength; i++) {
      html.push(<i className="fa fa-star"></i>)
    }
    return html;
  }
  return (
    <div className="flex py-20 border-b border-gray-120 cursor-pointer col-span-12 ">
      <div className=''>
        <img src={props.image} alt="" className="rounded-md  object-cover" style={{ width: 160, height: 167 }} />
        <Link to={`/hotel/${props.id}`}>
          <div className="text-center text-white rounded-md py-2 mt-3 text-12" style={{ backgroundImage: "linear-gradient(90deg,#f79441,#f25f58)" }}> Xem phòng</div>
        </Link>
      </div>
      <div className="flex flex-col justify-between w-full pl-6">
        <div className='pl-20 space-y-10'>
          <div className="text-xl font-bold text-gray-130 uppercase">
            {props.hotel_name}
          </div>
          <div className="flex items-center space-x-20">
            <div className="flex text-yellow-300 ">

              {renderStar(props.star)}
            </div>
            <div className="flex items-center ml-4 text-sm text-gray-600 space-x-6">
              <i className="fa fa-star"></i>
              <span> 86</span>
            </div>

            <div className="flex items-center ml-4 text-sm text-gray-600 space-x-6 ">
              <i className="fa fa-comment" aria-hidden="true"></i>

              <span>61</span>
            </div>
          </div>
          <div className="flex items-center text-gray-130">
            <i className="mr-3 fa fa-map-marker text-gray-150" aria-hidden="true"></i>
            <span className="text-sm"> {props.company.address} </span>
          </div>
          <div className="flex items-center text-gray-130">
            <i className="mr-3 fa fa-location-arrow text-gray-150" aria-hidden="true"></i>
            <span className="text-sm">Cách bạn 1.14km</span>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="text-18 text-gray-150 text-right" >
            <p>
              2h đầu:
              <span className="ml-2 font-bold text-black-200">{formatPrice(props.hour)}</span>
            </p>
            <p>
              Qua đêm:
              <span className="ml-2 font-bold text-orange-100">{formatPrice(props.price)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hoteltem
