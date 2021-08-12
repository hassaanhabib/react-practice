import axios from 'axios';
import React, { useState } from 'react'
import { Button } from './Button'

function OMDbAPISearch(props) {
    const title = props.title;
    return (
        <form className="OMDbAPISearch-container" onSubmit={props.handleSubmit}>
            <input type="text" value={title} name="title" placeholder="Enter movie title" className="OMDbAPI-input" onChange={props.handleInputChange} />
            <Button buttonStyle='btn--primary' type="submit">Search</Button>
        </form>
    )
}

export default OMDbAPISearch
