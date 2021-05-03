import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Filter({ setOpenSortData, stateFilter }) {
  const hotels = useSelector((state) => state.hotelsReducer.list_hotel);
  const [valueFilter, setvalueFilter] = useState();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState([
    {
      lable: "Tất cả",
      value: "all",
      checked: false,
    },
    {
      lable: "1-2 sao",
      value: "1,2",
      checked: false,
    },
    {
      lable: "3 sao trở lên",
      value: "3,4,5",
      checked: false,
    },
  ]);

  const [filterPrice, setFilterPrice] = useState([
    {
      lable: "<100K",
      value: "less100K",
      checked: false,
    },
    {
      lable: "100K-200K",
      value: "100to200",
      checked: false,
    },
    {
      lable: "200K-500K",
      value: "200to500",
      checked: false,
    },
    {
      lable: "500K-1Tr",
      value: "500to1tr",
      checked: false,
    },
    {
      lable: ">1Tr",
      value: "than1tr",
      checked: false,
    },
  ]);

  useEffect(() => {
    var classActive = ["border", "border-orange-200", "bg-pink"];
    for (let i = 0; i < filterPrice.length; i++) {
      if (filterPrice[i].checked) {
        document
          .getElementsByClassName("btn_price")
        [i].classList.add(...classActive);
      } else {
        document
          .getElementsByClassName("btn_price")
        [i].classList.remove(...classActive);
      }
    }
  }, [filterPrice]);

  function onChange(e) {
    let value = e.target.value;
    setvalueFilter(value);
    setFilter(
      filter.map((item) => {
        return item.value === value
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false };
      })
    );
  }

  function choosePrice(value) {
    setFilterPrice(
      filterPrice.map((item) => {
        return item.value === value
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false };
      })
    );
  }
  function sortPrice(newArr) {
    for (let index in filterPrice) {
      if (filterPrice[index].checked) {
        switch (filterPrice[index].lable) {
          case filterPrice[0].lable:
            return newArr = newArr.filter(item => item.price < 100000)
          case filterPrice[1].lable:
            return newArr = newArr.filter(item => item.price > 100000 && item.price < 200000)
          case filterPrice[2].lable:
            return newArr = newArr.filter(item => item.price > 200000 && item.price > 500000)
          case filterPrice[3].lable:
            return newArr = newArr.filter(item => item.price > 500000 && item.price <= 1000000)
          case filterPrice[4].lable:
            return newArr = newArr.filter(item => item.price > 1000000)


          default:
            break;
        }
      }
    }
    return newArr;
  }
  function resetFilter() {
    setvalueFilter();
    setFilterPrice(
      filterPrice.map((item) => {
        return { ...item, checked: false }

      })
    );
  }
  function handleFilter() {
    var newArr = hotels;
    newArr = sortPrice(newArr);

    if (valueFilter === filter[0].value) {
      newArr = hotels.filter((item) => item.star);
      newArr = sortPrice(newArr);

    } else if (valueFilter === filter[1].value) {
      newArr = hotels.filter((item) => item.star >= 1 && item.star < 3);
      newArr = sortPrice(newArr);
    } else if (valueFilter === filter[2].value) {
      newArr = hotels.filter((item) => item.star >= 3);
      newArr = sortPrice(newArr);

    }
    dispatch({ type: "LIST_HOTEL", payload: newArr });
    setOpenSortData();

  }
  return (
    <div
      className="sort  lg:mx-400 fixed bottom-0 left-0 right-0 z-50 "
      style={{
        transition: "ease-in-out 0.3s all",
        transform: stateFilter ? "translateY(0%)" : " translateY(100%)",
      }}
    >
      <div className="bg-white rounded-t-lg">
        <div className="flex justify-between items-center font-semibold p-18 border-b border-gray-120">
          <p className="font-bold">Bộ lọc</p>
          <p
            className="cursor-pointer text-sm text-gray-600 font-normal "
            onClick={() => resetFilter()}
          >
            Đặt lại
          </p>
        </div>
        <div className="p-18 space-y-20">
          <p className="font-bold ">Loại phòng</p>
          <Radio.Group onChange={onChange} value={valueFilter}>
            {filter.map((item, index) => {
              return (
                <div className="border-b py-20 border-gray-120" key={index}>
                  <Radio
                    value={item.value}
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    <span className="ml-2"> {item.lable} </span>
                  </Radio>
                </div>
              );
            })}
          </Radio.Group>
        </div>
        <div className="p-18">
          <p className="font-bold ">Khoảng giá</p>
          <div className="grid grid-cols-12 gap-x-8 mt-6 gap-y-10">
            {filterPrice.map((item, index) => {
              return (
                <div className="col-span-4" key={index}>
                  <button
                    onClick={() => choosePrice(item.value)}
                    className="outline-none btn_price focus:outline-none   bg-gray-125  text-black-150 rounded-md text-center w-full py-1.5 text-sm "
                  >
                    {item.lable}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="pt-18">
            <Button callBack={handleFilter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
