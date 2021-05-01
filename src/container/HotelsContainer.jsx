import React from 'react'
import { useSelector } from 'react-redux';
import Hoteltem from '../layouts/Hoteltem';

function HotelsContainer() {
    const listHotels = useSelector(state => state.hotelsReducer.list_hotel);
    return (
        <div className="grid grid-cols-12 ">
            {

                listHotels.map((item, index) => {
                    return (
                        <Hoteltem key={index} props={item} />

                    )
                })
            }


        </div>
    )
}

export default HotelsContainer
