import React from "react";
import Hoteltem from "../layouts/Hoteltem";

function ListHotel() {
  return (
    <div className="container py-3">
      <div className="flex items-center justify-between">
        <div>
          <i className="mr-3 fa fa-arrow-left" aria-hidden="true"></i>
          <span className="text-xl">Danh sách khách sạn</span>
        </div>
        <div>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="listhotel">
        <Hoteltem />
        <Hoteltem />
        <Hoteltem />
        <Hoteltem />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white md:container lg:container ">
        <div className="grid grid-cols-2 gap-2 px-4 py-4 md:px-0">
          <div className="px-4 py-3 text-center text-gray-400 border rounded-md shadow-xl cursor-pointer ">
            <i className="mr-1 fa fa-sort" aria-hidden="true"></i>
            <span>Sắp xếp</span>
          </div>
          <div className="px-4 py-3 text-center text-gray-400 border rounded-md shadow-xl cursor-pointer ">
            <i className="mr-1 fa fa-filter" aria-hidden="true"></i>
            <span>Lọc theo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHotel;
