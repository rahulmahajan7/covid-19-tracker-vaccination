import React from 'react'
import './style.css'

function NewsArticle({data}) {
    return (
        <div className="news">
           <h2 className="news__title">{data.title}</h2> 
           <img src={data.urlToImage} alt="" className="news__image"/>
           <p className="news__desc">{data.description}</p>
           <div className="news__footer">
           <span className="news__author">{data.author}</span> <br/>
           <span className="news__published">{data.publishedAt}</span>
           <span className="news__source">{data.source.name}</span>
           </div>
        </div>
    )
}

export default NewsArticle
