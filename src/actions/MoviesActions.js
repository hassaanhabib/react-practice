import { searchForMovies } from "../services/WebService";

export const FETCH_MOVIES = 'FETCH_MOVIES'

export const searchMoviesWithKeyword = async (title, dispatch) => {
    dispatch({
        type: FETCH_MOVIES,
        payload: {
            loading: true
        }
    })
    
    try {
        const response = await searchForMovies(title)
        dispatch({
            type: FETCH_MOVIES,
            payload: {
                data: response.data.Search, loading: false
            }
        })
    } catch (error) {
        dispatch({
            type: FETCH_MOVIES,
            payload: {
                loading: false, error: "Error in fetching!"
            }
        })
    }
}