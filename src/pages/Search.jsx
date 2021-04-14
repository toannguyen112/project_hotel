import React from 'react'

function Search() {
    return (
        <div className='container md:container lg:container space-y-3'>
            <div className="flex items-center text-xl py-4">
                <i className="fa fa-times mr-4 cursor-pointer" aria-hidden="true"></i>


                <span className="font-semibold">
                    Tìm kiếm</span></div>
            <div className=" border-b">
                <div className="flex space-x-5 px-4">
                    <div className="text-sm md:text-md font-semibold border-b-4 border-red-400 uppercase">Khách sạn</div>
                    <div className="text-sm md:text-md font-semibold text-gray-400 uppercase">địa điểm</div>

                </div>
            </div>
            <div className="flex mt-5 rounded-md">
                <input type="text" placeholder="Tìm kiếm khách sạn..." className="w-full bg-gray-50 rounded-md outline-none p-3 focus:bg-white focus:ring-4 focus:ring-gray-200" />
            </div>
        </div>
    )
}

export default Search
