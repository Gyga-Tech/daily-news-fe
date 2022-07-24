import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useGetArticleQuery } from "../../features/article/articleSlice";
import { Link } from "react-router-dom";
import "./ContentLatestNews.css"


const Loading = () => {
    return <div>Loading....</div>
}

const ContentLatestNews = () => {

    // const [listCover, setListCover] = useState()

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: 'http://localhost:9511/api/v5/movies'
    //     }).then((res) => {
    //         setListCover(res.data.data)
    //     })
    // })
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({})

    return (<>
        <div className="section-latest-news">
            <div className="title mx-5 mt-5">
                <h6>Latest News</h6>
            </div>
            <div className="latest-news-list d-flex flex-column mx-5">
                {isLoading ? (<Loading />) : article?.data?.results.slice(0, 3).map((item, index) => {
                    return (
                        <>

                            <div className="card-latest-news-list d-flex flex-row mx-2 mt-3 shadow-lg mb-5 bg-white rounded" style={{ width: "100%", height: "202px" }}>
                                <div className="cover">
                                    <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt="covid" title="covid" style={{ width: "126px", height: "202px" }}></img>
                                </div>
                                <div className="content d-flex flex-column mx-3" >
                                    <div className="content-title text-primary mt-3">
                                        <h6>{item.title.slice(0, 100)}</h6>
                                    </div>
                                    <div className="content-fill" >
                                        <p style={{ width: "500px" }}>{item.content.slice(0, 150)}</p>
                                    </div>
                                    <div className="properties d-flex flex-row justify-content-between mt-3">
                                        <div className="like d-flex flex-row">
                                            <i class="bi bi-hand-thumbs-up"></i>
                                            <p className="mx-1">2.1k</p>
                                        </div>
                                        <div className="time d-flex flex-row">
                                            <i className="bi bi-clock"></i>
                                            <p className="mx-1">3m ago</p>
                                        </div>
                                        <div className="tagged d-flex flex-row">
                                            <i className="bi bi-tag"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="read-now d-flex flex-row float-end">
                                    <Link to={`/article/${item.article_id}`} style={{ textDecoration: "none", color: "#0D253C" }}>
                                        <button className="btn btn-primary">Read now</button>
                                    </Link>
                                </div>
                            </div>

                        </>)
                })}
                {isError && (<h1>Error</h1>)}
            </div>
        </div>
    </>)
}

export default ContentLatestNews