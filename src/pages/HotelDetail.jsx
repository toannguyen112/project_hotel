import React, { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router";
import ButtonMore from "../components/ButtonMore";
import Comment from "../components/Comment";
import Order from "./Order";
import api from '../api'

function HotelDetail() {
  const [orderTab, setOrderTab] = useState(false);
  const [hotelInfo, setHotelInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    api.get(`hotels/${id}`).then((res) => {
      console.log(res.data);
      setHotelInfo(res.data)
    })
  }, [])
  return (
    <Fragment>
      <div className="container">
        {/* carosel  */}
        <div className="sticky px-2 md:sticky lg:sticky top-7 left-7 ">
          <i
            className="text-white cursor-pointer fa fa-arrow-left "
            aria-hidden="true"
          ></i>
        </div>
        <div>

          <img
            className="w-full "
            src={hotelInfo.image}
            alt=""
          />
        </div>
        <div className="p-3 mt-1 space-y-2 bg-gray-100">
          <div className="text-xl font-semibold text-gray-700 ">
            {hotelInfo.hotel_name}
          </div>
          <div className="flex">
            <div className="flex items-center mr-3">
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
            </div>
            <div className="flex items-center mr-3 text-gray-400">
              <i className="mr-1 fa fa-star"></i>
              <span>86</span>
            </div>
            <div className="flex items-center text-gray-400">
              <i className="mr-1 fa fa-star"></i>
              <span>86</span>
            </div>
          </div>
          <div className="flex items-center text-gray-400">
            <i className="mr-2 fa fa-map-marker" aria-hidden="true"></i>
            <span className="text-sm text-gray-600 ">
              88B Hùng Vưng , Phường 09 , Quạn 5 , TP. Hồ Chí Minh
            </span>
          </div>
        </div>
        <div className="px-3 md:p-0">
          <p className="py-2 text-xl font-bold">Hạng phòng</p>
        </div>
        <div className="px-3 listRoom md:p-0">
          <div className="flex py-3 border-b cursor-pointer ">
            <div>
              <img className="rounded-md" src="./hotel.png" alt="" />
            </div>
            <div className="flex flex-col justify-between flex-1 pl-3">
              <div className="text-xl font-bold uppercase">Dream</div>
              <div className="flex justify-end text-right">
                <div>
                  <p className="font-bold text-gray-400 ">
                    2h Đầu
                    <span className="text-yellow-500"> {hotelInfo.hour} </span>
                  </p>
                  <p className="font-bold text-gray-400 ">
                    Qua đêm
                    <span className="text-black"> {hotelInfo.price} </span>
                  </p>
                  <div className="p-1 text-center text-white bg-yellow-500 rounded-md cursor-pointer"
                    onClick={() => setOrderTab(true)}
                  >
                    Đặt phòng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 space-y-4 bg-gray-100 ">
          <p className="font-bold text-md">Chính sách khách sạn</p>
          <div className="flex bg-gray-100 border border-yellow-500 rounded-md ">
            <div className="p-3 text-center text-white bg-yellow-500 rounded-sm">
              Theo giờ
            </div>
            <div className="flex items-center px-3 text-sm">
              Đến ngay: Vui lòng nhận phòng trong 40 phút
            </div>
          </div>

          <div className="flex bg-gray-100 border border-blue-300 rounded-md ">
            <div className="p-3 text-center text-white bg-blue-300 rounded-sm">
              Qua đêm
            </div>
            <div className="flex items-center px-3">
              <div className="text-sm">
                <p> * Đến ngay: Vui lòng nhận phòng trong 40 phút.</p>
                <p>
                  * Đến đúng giờ: Giờ nhận phòng buổi đêm theo quy định của khách
                  sạn là
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="py-2 text-xl font-bold">Giới thiệu</p>
            <div>02838304896///////////////0899189679&nbsp;Bonita có nhiều</div>
          </div>
          <p className="text-xl font-bold">Tiện nghi</p>
          <div className="bg-gray-200 rounded-md">
            <div className="grid grid-cols-4 gap-2 p-3">
              <img
                className="w-1/3"
                src="https://quickstay.vn/hotel_images/icons/hair-dry.png"
                alt=""
              />
              <img
                className="w-1/3"
                src="https://quickstay.vn/hotel_images/icons/hair-dry.png"
                alt=""
              />
              <img
                className="w-1/3"
                src="https://quickstay.vn/hotel_images/icons/hair-dry.png"
                alt=""
              />
              <img
                className="w-1/3"
                src="https://quickstay.vn/hotel_images/icons/hair-dry.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="py-2 text-xl font-bold">Nhận xét (61)</p>
            <div className="space-y-3 listComment">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
          <ButtonMore />
        </div>
      </div>
      <Order orderTab={orderTab}
        setOrderTab={() => setOrderTab(false)}
      />
    </Fragment>
  );
}

export default HotelDetail;
