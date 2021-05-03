import React from 'react'

function Order({ orderTab, setOrderTab }) {
    return (
        <main>
            <div className="container  md:container lg:container space-y-3 h-screen fixed top-0 left-0 bottom-0 right-0  z-50  bg-white" style={{
                transition: "ease-in-out 0.3s all",
                transform: orderTab ? "translateY(0%)" : "translateY(100%)"
            }}>
                <div className="flex items-center">
                    <span className="mr-2" onClick={setOrderTab}>
                        <i className="fa fa-times cursor-pointer" aria-hidden="true"></i>
                    </span>
                    <p className="text-xl font-semibold py-5">Xác nhận đặt phòng</p>

                </div>
                <div className="flex justify-around items-center py-4">
                    <div className="text-center relative " >
                        <div className="p-1 rounded-full border border-green-700 inline-block">
                            <div className="p-1.5 bg-green-700 rounded-full"></div>
                        </div>
                        <div className="text-sm" >
                            Xác nhận đặt phòng
                           </div>
                    </div>

                    <div className="text-center" >
                        <div className="p-1 rounded-full border border-gray-300 inline-block">
                            <div className="p-1.5 bg-white rounded-full"></div>
                        </div>
                        <div className="text-sm" >
                            Thanh toán
                           </div>
                    </div>
                </div>
                <div className="border-t-4  border-gray-300 space-y-4 px-3">
                    <p className="text-md font-semibold pt-4">Thông tin phòng</p>
                    <div className="border rounded-md border-gray-300 p-5 space-y-2 ">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold  uppercase">On TOp</div>
                            <div className="text-sm text-gray-500 cursor-pointer" >
                                <span className="mr-2 text-green-500">
                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                </span>
                                Đổi hạng phòng
                            </div>
                        </div>
                        <div className="text-sm space-y-2">
                            <p>
                                <span className="mr-2 text-gray-300 text-md">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </span>
                                BONITa
                            </p>
                            <p>
                                <span className="mr-2 text-gray-300 text-md">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                BUi thi xuan
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-md border-gray-300 p-5">
                        <div className="text-center ">
                            <p className="text-md font-semibold">

                                Tôi muốn đặt phòng</p>
                            <div className='rounded-2xl bg-gray-100 inline-block my-5' >
                                <button className="outline-none border-none bg-gray-100 rounded-2xl px-6 py-1 text-black" >
                                    <span className="mr-2">
                                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                                    </span>
                                    Qua Đêm
                            </button>
                                <button className="outline-none border-none bg-red-400 rounded-2xl px-6 py-1 text-white" >
                                    <span className="mr-2">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    </span>
                                   Theo giờ
                            </button>
                            </div>
                        </div>
                        <div className="flex items-center border border-red-400 rounded-md">
                            <div className="bg-red-400 text-center py-4 px-6 text-white">
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </div>
                            <div className="text-center pl-5">

                                Vui lòng đến nhận phòng trong vòng 40 phút sau khi xác nhận
                            </div>
                        </div>
                    </div>
                    <p className="text-md font-semibold">Thông tin liên hệ</p>

                    <div className="border rounded-md border-gray-300 p-5 space-y-3">
                        <p className="text-gray-500 font-semibold  text-sm uppercase">Họ và tên</p>
                        <p className="text-black text-sm  font-semibold">Toàn Nguyễn</p>
                    </div>
                    <div className="border rounded-md border-gray-300 p-5 space-y-3">
                        <p className="text-gray-500 font-semibold  text-sm uppercase">Số điện thoại</p>
                        <p className="text-black text-sm  font-semibold">0775600321</p>
                    </div>
                    <p className="text-red-600 flex items-center text-md justify-between">
                        * Mọi thông tin chi tiết và yêu cầu hỗ trợ, bạn vui lòng liên hệ hotline: 0937.09.6688
                        <span>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                    </p>

                </div>
            </div>
        </main>
    )
}

export default Order
