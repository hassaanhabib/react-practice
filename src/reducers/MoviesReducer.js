import { FETCH_MOVIES } from "../actions/MoviesActions";

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
