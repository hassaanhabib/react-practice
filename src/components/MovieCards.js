import { logDOM } from '@testing-library/react';
import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function MovieCards(props) {
    const movieResponse = props.movieData;
    return (
        <div className="cards">
            <h1>Results found: {props.movieData.length}</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                   {movieResponse.map(item =>   <CardItem 
                            src={item.Poster}
                            text={item.Title}
                            label={item.Year}
                        />)}
                      
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieCards
