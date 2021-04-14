import React from 'react'
import Button from '../components/Button'
import { Radio } from "antd";

function Sort() {
    return (
        <div className="sort ">
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-20"></div>
            <div className="  rounded-t-lg fixed bottom-0 w-full left-0 right-0 ">
                <div className="container md:container lg:container ">
                    <div className="bg-white rounded-t-lg ">
                        <div className="xl:px-4 xl:py-4 ">
                            <div className="border-b border-gray-200 text-semibold py-4">
                                <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} >Mặc định</Radio>
                            </div>
                            <div className="border-b border-gray-200 text-semibold py-4">
                                <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} >Gía theo giờ từ thấp tới cao</Radio>
                            </div>
                            <div className="border-b border-gray-200 text-semibold py-4">
                                <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} >Gía theo giờ cao thấp tới thấp</Radio>
                            </div>
                            <div className="border-b border-gray-200 text-semibold py-4">
                                <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} >Gía qua đêm từ thấp đến cao</Radio>
                            </div>

                            <div className="border-b border-gray-200 text-semibold py-4">
                                <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} >Gía qua đêm từ cao đến thấp</Radio>
                            </div>
                           
                        </div>
                        <div className="px-4 py-4">
                                <Button />
                            </div>{" "}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort
