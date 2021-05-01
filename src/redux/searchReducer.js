const initialState = {
    search: false
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {

        case "OPEN_SEARCH":
            state.search = !state.search
            return { ...state }


        default:
            return state
    }
};

export default searchReducer;