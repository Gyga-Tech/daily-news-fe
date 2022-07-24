import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { useGetArticleQuery } from "../../features/article/articleSlice";

import "./Content.css"

const Loading = () => {
    return <div>Loading....</div>
}

const Content = () => {

    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     autoplay:true,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 5,
    //                 slidesToScroll: 5,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
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
    } =  useGetArticleQuery({})


    return (<>

        <div className="section-content d-flex flex-column">
            <div className="popular-tags mx-5 mt-5">
                <div className="field-popular-tag">
                    <h6>Popular Tags</h6>
                </div>
                <div className="btn-tag d-flex flex-row justify-content-between mt-2">
                    <button className="btn btn-light text-primary">#ladygaga</button>
                    <button className="btn btn-light text-primary">#jokowidodo</button>
                    <button className="btn btn-light text-primary">#dayniki</button>
                    <button className="btn btn-light text-primary">#ladygaga</button>
                    <button className="btn btn-light text-primary">#jokowidodo</button>
                    <button className="btn btn-light text-primary">#dayniki</button>
                    <button className="btn btn-light text-primary">#ladygaga</button>
                    <button className="btn btn-light text-primary">#jokowidodo</button>
                    <button className="btn btn-light text-primary">#dayniki</button>
                </div>
                
            </div>
            <div className="category d-flex flex-column mt-5">
                <div className="field-category">
                    <h6 className="mx-5">Category</h6>
                </div>
                    <div className="field-cover d-flex flex-row mx-5 justify-content-between">
                            {/* <Slider {...settings}> */}
                        <div className="d-flex flex-row">
                            {/* {!listCover ? (<Loading />) : listCover.map((item, index) => {
                                return (
                                    <div className="card-category-list mx-3 mt-3" key={index}>
                                        <img src={`http://localhost:9511/uploads/${item.cover}`} alt={item.title} title={item.title} />
                                        <p className="mt-2 text-center">{item.title}</p>
                                    </div>
                                )
                            })} */}
                            {isLoading ? (<Loading/>) : article?.data?.results?.map((item, index)=>{
                                return (
                                    <div className="card-category-list mx-3 mt-3" key={index}>
                                        <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt={item.title} title={item.title} />
                                        <p className="mt-2 text-center">{item.title}</p>
                                    </div>
                                )
                            }) }
                            {isError && (<h1>Error</h1>) }
                        </div>
                            {/* </Slider> */}
                    </div>
            </div>
            <div className="recommended d-flex flex-column" style={{marginTop:"10rem"}}>
                <div className="field-recommended mx-5 mt-5">
                    <h6>Recommended</h6>
                </div>
                <div className="card-recommended d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row mx-5">
                        {isLoading ? (<Loading />) : article?.data?.results?.map((item, index) => {
                            return (
                                <>
                                    <div className="card-recommended-list d-flex flex-row mx-2 mt-3 shadow-lg mb-5 bg-white rounded" style={{ width: "396px", height: "202px" }}>
                                        <div className="cover" key={index}>
                                            <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt="covid" title="covid" style={{ width: "126px", height: "202px" }}></img>
                                        </div>
                                        <div className="content d-flex flex-column mx-3">
                                            <div className="content-title text-primary mt-3">
                                                <h6>{item.title.slice(0, 20)}</h6>
                                            </div>
                                            <div className="content-fill">
                                                <p>{item.content.slice(0, 50)}...</p>
                                            </div>
                                            <div className="properties d-flex flex-row justify-content-between mx-1 mt-5" style={{fontSize:"0.8rem"}}>
                                                <div className="like d-flex flex-row">
                                                    <i className="bi bi-hand-thumbs-up mx-1"></i>
                                                    <p>2.1k</p>
                                                </div>
                                                <div className="time d-flex flex-row">
                                                    <i className="bi bi-clock mx-1"></i>
                                                    <p>3m ago</p>
                                                </div>
                                                <div className="tagged d-flex flex-row">
                                                    <i className="bi bi-tag mx-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {isError && (<h1>Error</h1>) }
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Content