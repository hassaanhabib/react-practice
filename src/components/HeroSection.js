import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Practicing React</h1>
            <p>Hassaan</p>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Get Started
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
