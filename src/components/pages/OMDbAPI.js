import React, { Fragment, useState } from 'react'
import Footer from '../Footer'
import OMDbAPISearch from '../OMDbAPISearch';
import '../OMDbAPI.css'
import axios from 'axios';
import MovieCards from '../MovieCards';

function OMDbAPI() {
    const [title, enterTitle] = useState('');
    const [movieResponse, setResponse] = useState({
        loading: false,
        error: "",
        data: []
    });

    const handleInputChange = (e) => enterTitle(e.target.value);
    const config = (apiKey, title) => ({
        method: 'GET',
        url: `https://omdbapi.com?apiKey=${apiKey}&s=${title}`,
    })
    const handleSubmit = async (event) => {
        setResponse({ ...movieResponse, loading: true })
        let response;
        event.preventDefault();
        try {
            response = await axios(config("6aec39fa", title));
            setResponse({ ...movieResponse, data: response.data.Search, loading: false });
        } catch (error) {
            setResponse({ ...movieResponse, loading: false, error: "Error in fetching!" })

        }

    }
    return (
        <>
            <div className="OMDbAPI-Container">
                <h2>Consuming OMDbAPI</h2>
                <OMDbAPISearch title={title} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
            </div>
            {movieResponse.loading && <p>Loading...</p>}
            {!!movieResponse.data?.length && <MovieCards movieData={movieResponse.data} />
            }
            {movieResponse.error && <p>{movieResponse.error}</p>}
            {movieResponse.data == undefined && <p>No results found</p>}


            <Footer />
        </>
    )
}

export default OMDbAPI;
