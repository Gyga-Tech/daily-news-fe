import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useGetArticleQuery } from "../../features/article/articleSlice";
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
    const{
        data:article,
        isLoading,
        isSuccess,
        isError,
        error
    } =  useGetArticleQuery()

    return (<>
        <div className="section-latest-news">
            <div className="title mx-5 mt-5">
                <h6>Latest News</h6>
            </div>
            <div className="latest-news-list d-flex flex-row flex-wrap">
                {isLoading ? (<Loading />) : article.data.map((item, index) => {
                    return (
                        <>
                            <div className="card-latest-news-list d-flex flex-row mx-2 mt-3 shadow-lg mb-5 bg-white rounded" style={{ width: "396px", height: "202px" }}>
                                <div className="cover">
                                    <img src={`http://localhost:9511/uploads/${item.cover}`} alt="covid" title="covid" style={{ width: "126px", height: "202px" }}></img>
                                </div>


                                <div className="content d-flex flex-column mx-3">
                                    <div className="content-title text-primary mt-3">
                                        <h6>COVID-19</h6>
                                    </div>
                                    <div className="content-fill">
                                        <p>Why corona never ends? <br /> Lets see how its facts</p>
                                    </div>
                                    <div className="properties d-flex flex-row justify-content-between mt-5">
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
                            </div>
                        </>)
                })}
            </div>
        </div>
    </>)
}

export default ContentLatestNews