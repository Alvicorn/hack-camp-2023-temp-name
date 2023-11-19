import React from 'react'
import { useState } from "react"
import './App.css'
import './Player.css'

function Player(props) {
    // where title is headline title, image taken from news, summary from AgentHub, link to full page, reader as speech to text
    const { title, image, summary, linkNews, reader } = props;

    return (
        <>
        <div className="player-container">
            <div className = "player-title">
                <h1>{title}</h1>
            </div>
            <div className="image-container">
                <img src={image} alt="News" className="news-image" />
            </div>
            <div className="content-container">
                <p className="news-summary">{summary}</p>
                <a href={linkNews} className="news-link">View full</a>
            </div>
            <div className= "player-reader">
                <button className="news-button">{reader}</button>
            </div>
        </div>
        </>
    )
}

export default Player;