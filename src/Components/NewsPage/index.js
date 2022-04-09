import React, { useState, useEffect } from 'react'
import axios from "axios";
// import { NewsContextProvider } from "./NewsContext"
import  NewsArticle  from "./NewsArticle"
import Error_Emoji from "./error_emoji.png"
import Header from '../../Containers/Header'
import './style.css'

export const NewsPage = (props) => {
    const [data, setData] = useState();
    // const apiKey = "a5612074970c484c9121d762980fab19";

    useEffect(() => {
            axios.get(
                "https://newsapi.org/v2/everything?q=coronavirus+lockdown+covid+vaccine&apiKey=a5612074970c484c9121d762980fab19"
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
    },[data]);

    return (
        <>
            <Header/>
            
            { data ? <div className="all__news"> { data.articles.map((news) => (
                    <NewsArticle data={news} key={news.url}/>
                )) }</div> : 
                <div className="Error__Code">
                    <h1>RateLimited!!</h1>
                    <img src={Error_Emoji} className="img__error__emoji" alt=""/>
                <h1>API fetch LIMIT reach!</h1>
                </div> }
        </>
    );
}

// export default NewsPage;
