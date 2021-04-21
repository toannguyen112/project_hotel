import Home from "../pages/Home";
import HotelDetail from "../pages/HotelDetail";
import ListHotel from "../pages/ListHotel";

const routes = [
    {
        path: "/",
        component: Home,
        exact : true

    },
    {
        path: "/listhotel",
        component: ListHotel,
        exact : true
    },
    {
        path: "/hotel/:id",
        component: HotelDetail,
        exact : true
    },


];

export default routes;