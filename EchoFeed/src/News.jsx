import React from 'react'
import { useState } from "react"
import './App.css'
import './News.css'

function News(props) {
    const { imageSrc, title, category, buttonText } = props;

    return (
        <>
        <div className="news-container">
            <div className="image-container col-4">
                <img src={imageSrc} alt="News" className="news-image" />
            </div>
            <div className="content-container col-8">
                <h2 className="news-title">{title}</h2>
                <p className="news-category">{category}</p>
                <button className="news-button">{buttonText}</button>
            </div>
        </div>
        </>
    )
}

export default News;