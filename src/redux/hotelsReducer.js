const initialState = {
    list_hotel: []
}
const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {

        case "LIST_HOTEL":
            state.list_hotel = action.payload
            return { ...state }


        default:
            return state
    }
};

export default hotelsReducer;