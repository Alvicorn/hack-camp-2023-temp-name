import React from 'react'
import { useState } from "react"
import './App.css'
import './News.css'
// import playcircle.png
import playcircle from './assets/play_circle.png'

function News(props) {
    // don't include image for now
    const {title, category, summary, linkFull, onClick} = props;

    // category and link from API, title from fetched API, summary from AgentHub
    return (
        <>
        <div className="news-container" onClick={() => onClick({title, category, summary, linkFull})}>
            <div className="content-container">
                <div className="content-upper">
                    <h2 className="news-title">{title}</h2>
                    <p className="news-category">{category}</p>
                </div>
                <div className = "content-lower">
                    <img src={playcircle} alt="Play" className="news-play" />
                </div>
            </div>
        </div>
        </>
    )
}

export default News;