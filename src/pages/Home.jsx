import React from "react";
import ButtonMore from "../components/ButtonMore";
import Header from "../layouts/Header";
import Hoteltem from "../layouts/Hoteltem";
import Search from "./Search";
function Home() {
  return (
    <div className="container mx-auto sm:container md:container lg:container">
      {/* header  */}
      <Header />
      {/* top hotel   */}
      <h2 className="my-2 text-xl font-bold">Top Khách sạn nổi bật</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-md cursor-pointer">
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
        <div className="relative overflow-hidden rounded-md cursor-pointer">
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
      </div>
      {/* list hotel  */}
      <Hoteltem />
      <Hoteltem />
      <Hoteltem />

      <ButtonMore />


      {/* <Search/> */}
    </div>
  );
}

export default Home;
