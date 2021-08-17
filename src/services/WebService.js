import axios from 'axios';


const config = (apiKey, title) => ({
    method: 'GET',
    url: `https://omdbapi.com?apiKey=${apiKey}&s=${title}`,
    header: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    // data: {s: title, apikey: "6aec39fa"}

})


export const searchForMovies = async (title) => {
    return axios(config("6aec39fa", title))
}
