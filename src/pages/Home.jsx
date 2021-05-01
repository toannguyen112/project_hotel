import React from "react";
import ButtonMore from "../components/ButtonMore";
import HotelsContainer from "../container/HotelsContainer";
import Header from "../layouts/Header";
import HotelImage from "../components/HotelImage";
import Search from "./Search";
function Home() {

  return (
    <div className="container mx-auto sm:container md:container lg:container">
      {/* header  */}
      <Header />
      {/* top hotel   */}
      <h2 className="my-2 text-xl font-bold">Top Khách sạn nổi bật</h2>
      <div className="grid grid-cols-12 gap-4">
        <HotelImage />
        <HotelImage />
        <HotelImage />

      </div>
      {/* list hotel  */}
      <HotelsContainer />

      <ButtonMore />


      <Search />
    </div>
  );
}

export default Home;
