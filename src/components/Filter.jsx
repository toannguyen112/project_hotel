import React from "react";
import { Radio } from "antd";
import Button from "../components/Button";
function Filter() {
  return (
    <div className="sort ">
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-20"></div>
      <div className="  rounded-t-lg fixed bottom-0 w-full left-0 right-0 ">
        <div className="container md:container lg:container ">
          <div className="bg-white rounded-t-lg">
            <div className="flex justify-between items-center font-semibold p-4 border-b border-gray-300">
              <p className="font-bold">Bộ lọc</p>
              <p className="cursor-pointer text-sm text-gray-600 font-normal">
                Đặt lại
              </p>
            </div>
            <div className="p-4 space-y-6">
              <p className="font-bold ">Loại phòng</p>
              <div>
                <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
                  Tất cả
                </Radio>
              </div>
              <div>
                <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
                  1-2 sao
                </Radio>
              </div>
              <div>
                <Radio style={{ fontWeight: "bold", cursor: "pointer" }}>
                  3 sao trở lên
                </Radio>
              </div>
            </div>
            <div className="px-4">
              <p className="font-bold ">Khoảng giá</p>
              <div className="grid grid-cols-12 gap-4 mt-6">
                <div className="col-span-4">
                  <button className="outline-none border-none bg-gray-200 text-gray-400 rounded-md text-center w-full py-1.5 text-sm ">
                    100K
                  </button>
                </div>
                <div className="col-span-4">
                  <button className="outline-none border-none bg-gray-200 text-gray-400 rounded-md text-center w-full py-1.5 text-sm ">
                    100K
                  </button>
                </div>
                <div className="col-span-4">
                  <button className="outline-none border-none bg-gray-200 text-gray-400 rounded-md text-center w-full py-1.5 text-sm ">
                    100K
                  </button>
                </div>
                <div className="col-span-4">
                  <button className="outline-none border-none bg-gray-200 text-gray-400 rounded-md text-center w-full py-1.5 text-sm ">
                    100K
                  </button>
                </div>
                <div className="col-span-4">
                  <button className="outline-none border-none bg-gray-200 text-gray-400 rounded-md text-center w-full py-1.5 text-sm ">
                    100K
                  </button>
                </div>
              </div>
              <div className="py-4">
                <Button />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
