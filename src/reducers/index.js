import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";

const reducers = combineReducers({
    moviesData: MoviesReducer
})

export default reducers