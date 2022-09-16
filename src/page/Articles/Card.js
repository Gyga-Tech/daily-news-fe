import "./Card.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";


const CardArticles = (props) => {
    const {item} = props
    
    return (
            <div className="col-lg-3 col-md-6 mb-4 cardies">
        
            <Link to={`/article/${item.article_id}`}>
            <div className="card card-articles rounded-2 shadow"> 
                <div className="inner-img ">
                    <img
                        src={`https://gyga-news.herokuapp.com/public/${item.cover}`} className="card-img-top img-articles" alt="..." />
                </div>
                    <div className="card-body">
                        <h5 className="card-title text-center bold">{item.title}</h5>
                        
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                        <div>
                            <i className={`bi bi-hand-thumbs-up me-1`}></i>
                            <small className="text-muted">12k likes</small>
                        </div>
                        <div>
                            <i className="bi bi-clock-history me-1"></i>
                            <small className="text-muted">{moment(item.created_at).format('MMMM DD YYYY') }</small>
                        </div>
                        <i className="bi bi-bookmark"></i>
                    </div>
            </div>
             </Link>
            </div>
        
    )
}

export default CardArticles