import React, { Fragment, useEffect, useState } from "react";
import Hoteltem from "../layouts/Hoteltem";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useDispatch } from "react-redux";
function ListHotel() {
  const [openSortData, setOpenSortData] = useState({
    sort: false,
    filter: false,
    search: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  function closeTab(params) {
    setOpenSortData({ ...openSortData, sort: !openSortData.sort });
  }

  return (
    <Fragment>
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <i className="mr-3 fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <span className="text-xl">Danh sách khách sạn</span>
          </div>
          <div onClick={() => dispatch({ type: "OPEN_SEARCH" })}>
            <i
              className="fa fa-search cursor-pointer"
              aria-hidden="true"
              onClick={() => setOpenSortData({ ...openSortData, search: true })}
            ></i>
          </div>
        </div>
        <div className="listhotel ">
          <Hoteltem />
          <Hoteltem />
          <Hoteltem />
          <Hoteltem />
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white md:container lg:container ">
          <div className="grid grid-cols-2 gap-2 px-4 py-4 md:px-0">
            <div
              className="px-4 py-3 text-center text-gray-400 border rounded-md shadow-xl cursor-pointer  "
              onClick={() =>
                setOpenSortData({ ...openSortData, sort: !openSortData.sort })
              }
            >
              <i className="mr-1 fa fa-sort" aria-hidden="true"></i>
              <span>Sắp xếp</span>
            </div>
            <div
              className="px-4 py-3 text-center text-gray-400 border rounded-md shadow-xl cursor-pointer  "
              onClick={() =>
                setOpenSortData({
                  ...openSortData,
                  filter: !openSortData.filter,
                })
              }
            >
              <i className="mr-1 fa fa-filter" aria-hidden="true"></i>
              <span>Lọc theo</span>
            </div>
          </div>
        </div>
      </div>
      {openSortData.sort || openSortData.filter ? (
        <div
          className="overflow bg-gray-400 fixed top-0 bottom-0 left-0 right-0 opacity-40 z-10"
          onClick={() =>
            setOpenSortData({ ...openSortData, filter: false, sort: false })
          }
        ></div>
      ) : (
        ""
      )}
      <Sort closeTab={closeTab} stateSort={openSortData.sort} />
      <Filter closeTab={closeTab} stateFilter={openSortData.filter} />
      <Search />
    </Fragment>
  );
}

export default ListHotel;
