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

    // For text to speech
    const synth = window.speechSynthesis;
    const speakSummary = () => {
        const utterance = new SpeechSynthesisUtterance(summary);
        synth.speak(utterance);
      };

    return (
        <>
        
        {defaultState && (
            <div className="player-default-inside-container">
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
            <div className="player-actual-inside-container">
                <div className="player-upper">
                    <div className="player-category">
                        <h5>{category}</h5>
                    </div>
                    <div className="player-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="player-summary">
                        <p>{summary}</p>
                    </div>
                    <div className="player-link">
                        <a href={linkFull} target="_blank" rel="noreferrer">Read Full Article</a>
                    </div>
                </div>
                <div className="player-lower"> {/* Your reader button or any other content specific to the Player */}
                        <button className="player-button" onClick={speakSummary}></button>
                </div>
            </div>
        )}
        </>
    )
}

export default Player;