import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice } from '../utils/formatPrice'
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { EffectCube, Pagination } from "swiper/core";
SwiperCore.use([EffectCube, Pagination]);

function RoomDetail({ roomDetail, setRoomDetail, roomInfo }) {
    return (
        <div className=" fixed left-0 right-0 bottom-0 container top-0 z-50 bg-white " style={{
            transition: "ease-in-out 0.3s all",
            transform: roomDetail ? "translateY(0%)" : "translateY(100%)"
        }}>

            <div className=" grid grid-cols-12 bg-black-100 p-20">
                <div className="col-start-1 items-center flex ">
                    <div to="" onClick={setRoomDetail}>
                        <i
                            className="text-white cursor-pointer fa fa-arrow-left mr-auto "
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
                <div className=" text-20 text-white  uppercase col-start-5 col-end-10">
                    <p className="font-bold"> {roomInfo.room_name} </p>
                </div>

            </div>
            <div style={{ height: "calc(100%  - 140px)" }} className=' overflow-x-hidden overflow-y-auto'>
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    className="mySwiper z-50"
                >
                    {
                        roomInfo.room_image && roomInfo.room_image.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img className='w-full  object-cover' src={item.image} alt="" />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                <div className="bg-gray-110 text-black-100 p-18 font-bold mt-20 text-20 flex items-center uppercase">
                    {roomInfo.room_name}
                </div>
                <div className="flex justify-between text-20 border-b-2 p-18 border-gray-110">
                    <span className="text-gray-100  font-semibold" > 2h đầu</span>
                    <span className="text-orange-100  font-semibold" >  {formatPrice(roomInfo.hour)}</span>
                </div>
                <div className="flex justify-between text-20 border-b-2 p-18 border-gray-110">
                    <span className="text-gray-100  font-semibold" > Qua đêm</span>
                    <span className="text-black-100  font-semibold" > {formatPrice(roomInfo.current_price)}</span>
                </div>
            </div>


            <div className="fixed container bottom-0 left-0 right-0 bg-white  py-12 z-40">
                <button className="outline-none rounded-md bg-orange-100 text-white w-full font-semibold p-16" >
                    Đặt phòng ngay
                        </button>
            </div>
        </div>
    )
}

export default RoomDetail
