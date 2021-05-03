import React from 'react'

function Comment() {
  return (
    <div className="flex flex-row p-3 bg-gray-125 rounded-md ">
      <div className="flex ">
        <img
          src="https://statics.vntrip.vn/images/default-avatar.png"
          alt=""
        />
        <div className="ml-2">
          <p className="font-bold">Lợi Specter</p>
          <p className="text-sm ">Lễ tân thân thiện</p>
        </div>

      </div>

      <div className="items-center flex-1 text-right text-yellow-400">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
    </div>
  )
}

export default Comment
