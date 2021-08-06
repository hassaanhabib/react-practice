import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out the following</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Adventure"
                            path='/services'
                        />
                         <CardItem 
                            src="images/img-2.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Islands"
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Space"
                            path='/services'
                        />
                         <CardItem 
                            src="images/img-4.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Grounds"
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-8.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Deserts"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
