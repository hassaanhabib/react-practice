import React, { Fragment,useState} from 'react'
import Footer from '../Footer'
import OMDbAPISearch from '../OMDbAPISearch';
import '../OMDbAPI.css'
import axios from 'axios';

function OMDbAPI() {
    const [title,enterTitle] = useState('');
    let movieResponse = {};

    const handleInputChange = (e) => enterTitle(e.target.value);
    const config = (apiKey, title) =>  ({
        method: 'GET',
        url: `https://omdbapi.com?apiKey=${apiKey}&s=${title}`,
        header: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        // data: {s: title, apikey: "6aec39fa"}
        
    })
    const handleSubmit = (event) => {
        axios(config("6aec39fa", title)).then((response)=>{movieResponse=response.data.Search;console.log(movieResponse);console.log(movieResponse.length);});
        
        event.preventDefault();
    }
    return (
        <Fragment>
            <div className="OMDbAPI-Container">
                <h2>Consuming OMDbAPI</h2>
                <OMDbAPISearch title={title} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default OMDbAPI;
