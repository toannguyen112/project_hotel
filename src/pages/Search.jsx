import React from "react";
import { useDispatch, useSelector } from 'react-redux'
function Search() {
    const searchState = useSelector(state => state.searchReducer);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                transition: "ease-in-out 0.3s all",
                transform: searchState.search ? "translateY(0%)" : " translateY(100%)",
            }}
            className="container md:container lg:container space-y-3 h-screen fixed top-0 left-0 bottom-0 right-0   bg-white"
        >
            <div className="flex items-center text-xl py-4">
                <i
                    className="fa fa-times mr-4 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => dispatch({ type: "OPEN_SEARCH" })}
                ></i>

                <span className="font-semibold">Tìm kiếm</span>
            </div>
            <div className=" border-b">
                <div className="flex space-x-5 px-4">
                    <div className="text-sm md:text-md font-semibold border-b-4 border-red-400 cursor-pointer uppercase">
                        Khách sạn
          </div>
                    <div className="text-sm md:text-md font-semibold text-gray-400 cursor-pointer uppercase">
                        địa điểm
          </div>
                </div>
            </div>
            <div className="flex mt-5 rounded-md">
                <input
                    type="text"
                    placeholder="Tìm kiếm khách sạn..."
                    className="w-full bg-gray-50 rounded-md outline-none p-3 focus:bg-white focus:ring-4 focus:ring-gray-200"
                />
            </div>
        </div>
    );
}

export default Search;
