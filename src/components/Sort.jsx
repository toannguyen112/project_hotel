import React from 'react'
import Button from '../components/Button'
import { Radio } from "antd";

function Sort({ stateSort }) {

    return (
        <div className="sort mx-400 fixed bottom-0 left-0 right-0 z-10 " style={{
            transition: "ease-in-out 0.3s all",
            transform: stateSort ? "translateY(0%)" : " translateY(100%)",
        }}>
            <div className="bg-white rounded-t-lg  ">
                <div className="xl:px-4 xl:py-4 space-y-20">
                    <div className="border-b  flex items-centerborder-gray-200 text-semibold py-4">
                        <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} ><span className="ml-3">Mặc định</span></Radio>
                    </div>
                    <div className="border-b flex items-center border-gray-200 text-semibold py-4">
                        <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} ><span className="ml-3">Gía theo giờ từ thấp tới cao</span></Radio>
                    </div>
                    <div className="border-b flex items-centerborder-gray-200 text-semibold py-4">
                        <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} ><span className="ml-3">Gía theo giờ cao thấp tới thấp</span></Radio>
                    </div>
                    <div className="border-b flex items-center border-gray-200 text-semibold py-4">
                        <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} ><span className="ml-3">Gía qua đêm từ thấp đến cao</span></Radio>
                    </div>


                    <div className="border-b flex items-center border-gray-200 text-semibold py-4">
                        <Radio style={{ fontWeight: "bold", cursor: 'pointer' }} ><span className="ml-3">Gía qua đêm từ cao đến thấp</span></Radio>
                    </div>

                </div>
                <div className="px-4 py-4">
                    <Button />
                </div>{" "}

            </div>
        </div>
    )
}

export default Sort
