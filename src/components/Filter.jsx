import React from "react";
import { Radio } from "antd";
import Button from "../components/Button";
import ButtonPrice from "./ButtonPrice";
function Filter({ stateFilter }) {
  return (
    <div className="sort  mx-400 fixed bottom-0 left-0 right-0 z-50 " style={{
      transition: "ease-in-out 0.3s all",
      transform: stateFilter ? "translateY(0%)" : " translateY(100%)",
    }}>
      <div className="bg-white rounded-t-lg">
        <div className="flex justify-between items-center font-semibold p-4 border-b border-gray-300">
          <p className="font-bold">Bộ lọc</p>
          <p className="cursor-pointer text-sm text-gray-600 font-normal">
            Đặt lại
              </p>
        </div>
        <div className="p-4 space-y-20">
          <p className="font-bold ">Loại phòng</p>
          <div>
            <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
              <span className="ml-2">Tất cả</span>
            </Radio>
          </div>
          <div>
            <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
              <span className="ml-2"> 1-2 sao</span>
            </Radio>
          </div>
          <div>
            <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
              <span className="ml-2">3 sao trở lên</span>
            </Radio>
          </div>
        </div>
        <div className="px-4">
          <p className="font-bold ">Khoảng giá</p>
          <div className="grid grid-cols-12 gap-x-8 mt-6 gap-y-10">
            <div className="col-span-4">
              <ButtonPrice />
            </div>
            <div className="col-span-4">
              <ButtonPrice />
            </div>
            <div className="col-span-4">
              <ButtonPrice />
            </div>
            <div className="col-span-4">
              <ButtonPrice />
            </div>
            <div className="col-span-4">
              <ButtonPrice />
            </div>
          </div>
          <div className="py-4">
            <Button />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Filter;
