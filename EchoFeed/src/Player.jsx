import React from 'react'
import { useState } from "react"
import './App.css'
import './Player.css'

function Player(props) {
    // where title is headline title, image taken from news, summary from AgentHub, link to full page, reader as speech to text
    const { title, category, summary, linkFull} = props;

    return (
        <>
        <div className="player-container">
            <div className="player-category">
                <h3>{category}</h3>
            </div>
            <div className = "player-title">
                <h1>{title}</h1>
            </div>
            <div className="content-container">
                <p className="news-summary">{summary}</p>
                <a href={linkFull} className="news-link">View full</a>
            </div>
            <div className= "player-reader">
                <button className="news-button">Reader</button>
            </div>
        </div>
        </>
    )
}

export default Player;