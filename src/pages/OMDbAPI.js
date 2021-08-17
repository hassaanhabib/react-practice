import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesWithKeyword } from '../actions/MoviesActions';
import Footer from '../components/Footer';
import MovieCards from '../components/MovieCards';
import '../components/OMDbAPI.css';
import OMDbAPISearch from '../components/OMDbAPISearch';

function OMDbAPI() {
    const [title, enterTitle] = useState('');
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const { moviesData = {} } = content;
    const {
        loading,
        error,
        data
    } = moviesData;

    const handleInputChange = (e) => enterTitle(e.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        searchMoviesWithKeyword(title, dispatch);
    }

    return (
        <Fragment>
            <div className="OMDbAPI-Container">
                <h2>Consuming OMDbAPI</h2>
                <OMDbAPISearch title={title} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
            </div>
            {loading && <p>Loading...</p>}
            {!!data?.length && <MovieCards movieData={data} />
            }
            {error && <p>{error}</p>}
            {data == undefined && <p>No results found</p>}


            <Footer />
        </Fragment>
    )
}

export default OMDbAPI;
