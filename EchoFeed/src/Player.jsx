import React from 'react'
import { useState, useEffect } from "react"
import './App.css'
import './Player.css'
import microphone from './assets/microphone.png'

function Player(props) {
    // where title is headline title, image taken from news, summary from AgentHub, link to full page, reader as speech to text
    const { title, category, summary, linkFull} = props;

    const [defaultState, setDefaultState] = useState(true);

    const  defaultText= "Click on an article to view and play audio";
    const defaultImage = microphone;

    useEffect(() => {
        setDefaultState(title === '' && category === '' && summary === '' && linkFull === '');
    }, [title, category, summary, linkFull]);

    return (
        <>
        
        {defaultState && (
            <div className="player-container">
                <div className="default-image-container">
                    {/* Render the image only if it's the default state */}
                    <img src={defaultImage} alt="Default Image" />
                </div>
                <div className="default-text-container">
                    <p>{defaultText}</p>
                </div>
            </div>
        )}
        
        {!defaultState && (
            <div className="player-container">
                <div className="player-category">
                    <h3>{category}</h3>
                </div>
                <div className="player-title">
                    <h1>{title}</h1>
                </div>
                <div className="player-summary">
                    <p>{summary}</p>
                </div>
                <div className="player-reader">
                    {/* Your reader button or any other content specific to the Player */}
                    <button className="news-button">Reader</button>
                </div>
            </div>
        )}
        </>
    )
}

export default Player;