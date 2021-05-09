import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice } from '../utils/formatPrice';
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper/core";

// install Swiper modules
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router";
import ButtonMore from "../components/ButtonMore";
import Comment from "../components/Comment";
import Order from "./Order";
import api from "../api";
import { Link } from "react-router-dom";
import RoomDetail from "./RoomDetail";
const style = {
  backgroundColor: "rgba(0,0,0,.7)",
};

SwiperCore.use([EffectCube, Pagination]);
function HotelDetail() {
  const [orderTab, setOrderTab] = useState(false);
  const [roomDetail, setRoomDetail] = useState(false);
  const [hotelInfo, setHotelInfo] = useState({});
  const [company, setCompany] = useState({})
  const [room, setRoom] = useState([]);
  const [roomInfo, setroomInfo] = useState({})
  const { id } = useParams();
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    api.get(`hotels/${id}`).then((res) => {
      console.log(res.data);
      setHotelInfo(res.data);
      setRoom(res.data.room);
      setCompany(res.data.company)
    });
  }, [id]);
  function handleRoomDetail(room) {
    setRoomDetail(true);
    api.get(`room/${room.id}`).then((res) => {
      setroomInfo(res.data)
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <div className="container">
        {/* carosel  */}
        <div
          className="fixed left-0 right-0 md:mx-400 px-2 top-0 z-20   transition-all p-22 "
          style={isSticky ? style : null}
          ref={ref}
        >
          <div className=" grid grid-cols-12">
            <div className="col-start-1 items-center flex ">
              <Link to="">
                <i
                  className="text-white cursor-pointer fa fa-arrow-left mr-auto "
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
            <div className="col-start-5 col-end-10">
              {isSticky ? (
                <p className="uppercase text-24 font-bold text-white">
                  {" "}
                  {hotelInfo.hotel_name}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
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
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={hotelInfo.image} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hotelInfo.image} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="p-3 mt-2 space-y-2 bg-gray-140">
          <div className="text-xl font-semibold uppercase ">
            {hotelInfo.hotel_name}
          </div>
          <div className="flex">
            <div className="flex items-center mr-3">
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
              <i className="mr-1 text-yellow-500 fa fa-star"></i>
            </div>
            <div className="flex items-center mr-3 text-gray-130">
              <i className="mr-1 fa fa-star"></i>
              <span>86</span>
            </div>
            <div className="flex items-center text-gray-130">
              <i className="mr-1 fa fa-star"></i>
              <span>86</span>
            </div>
          </div>
          <div className="flex items-center text-gray-130">
            <i className="mr-2 fa fa-map-marker" aria-hidden="true"></i>
            <span className="text-sm text-gray-600 ">
              {company.address}
            </span>
          </div>
        </div>
        <div className="px-3 md:p-0">
          <p className="py-2 text-xl font-bold">Hạng phòng</p>
        </div>
        <div className="px-3 listRoom md:p-0">
          {
            room.map((room, index) => {
              return (
                <div className="border-b py-20 border-gray-120">
                  <div className="flex   cursor-pointer " key={index} onClick={() => handleRoomDetail(room)} >
                    <div className="">
                      <img className="rounded-md" src={room.image} alt="" style={{ width: 120, height: 170, objectFit: "cover" }} />
                    </div>
                    <div className="flex flex-col justify-between flex-1 pl-3">
                      <div className="text-xl font-bold uppercase">{room.room_name}</div>
                      <div className="flex justify-end text-right">
                        <div>
                          <p className="font-bold text-gray-130 text-18 ">
                            2h Đầu
                      <span className="text-yellow-500"> {formatPrice(room.hour)} </span>
                          </p>
                          <p className="font-bold text-gray-130 text-18 ">
                            Qua đêm
                      <span className="text-black"> {formatPrice(room.current_price)} </span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" text-right py-10"
                    onClick={() => setOrderTab(true)}
                  >
                    <button className=" text-center text-white bg-orange-100  rounded-md cursor-pointer outline-none px-32 py-8 text-12">
                      Đặt Phòng
                    </button>

                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="px-3 py-20 space-y-10 bg-gray-140 ">
          <p className="font-bold text-md">Chính sách khách sạn</p>
          <div className="flex bg-gray-140 border border-yellow-500 rounded-md ">
            <div className="p-20 text-center text-white bg-orange-100 rounded-sm">
              Theo giờ
            </div>
            <div className="flex items-center px-3 text-sm">
              Đến ngay: Vui lòng nhận phòng trong 40 phút
            </div>
          </div>

          <div className="flex mt-18 border border-blue-200 rounded-md ">
            <div className="p-20  text-center text-white bg-blue-200 rounded-sm">
              Qua đêm
            </div>
            <div className="flex items-center px-3">
              <div className="text-sm">
                <p> * Đến ngay: Vui lòng nhận phòng trong 40 phút.</p>
                <p>
                  * Đến đúng giờ: Giờ nhận phòng buổi đêm theo quy định của
                  khách sạn là
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="py-2 text-xl font-bold">Giới thiệu</p>
            <div>02838304896///////////////0899189679&nbsp;Bonita có nhiều</div>
          </div>
          <p className="text-xl font-bold">Tiện nghi</p>
          <div className=" rounded-md bg-gray-125">
            <div className="grid grid-cols-12 gap-2 p-3">
              <img
                className="col-span-3 w-1/3"
                src="https://quickstay.vn/hotel_images/icons/hair-dry.png"
                alt=""
              />
              <img
                className="col-span-3 w-1/3"
                src="https://quickstay.vn/hotel_images/icons/wifi.png"
                alt=""
              />
              <img
                className="col-span-3 w-1/3"
                src="https://quickstay.vn/hotel_images/icons/shower.png"
                alt=""
              />
              <img
                className="col-span-3 w-1/3"
                src="https://quickstay.vn/hotel_images/icons/air.png"
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
      <Order
        orderTab={orderTab}
        setOrderTab={() => setOrderTab(false)} />
      <RoomDetail
        roomInfo={roomInfo}
        roomDetail={roomDetail}
        setRoomDetail={() => setRoomDetail(false)}
      />
    </Fragment>
  );
}

export default HotelDetail;
