const initialState = {
    list_hotel: [],
    list_hotel_filter: [],
}
const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {

        case "LIST_HOTEL":
            state.list_hotel = action.payload
            return { ...state }
        case "LIST_HOTEL_FILTER":
            state.list_hotel_filter = action.payload
            return { ...state }


        default:
            return state
    }
};

export default hotelsReducer;