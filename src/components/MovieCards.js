import { logDOM } from '@testing-library/react';
import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function MovieCards(props) {
    const { movieData } = props;
    return (
        <div className="cards">
            <h1>Results found: {movieData.length}</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        {movieData.map(item => <CardItem
                            key={item.imdbID}
                            src={item.Poster}
                            text={item.Title}
                            label={item.Year}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCards
