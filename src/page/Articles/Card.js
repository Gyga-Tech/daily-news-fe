import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

const CardArticles = (props) => {
    const {item} = props
    const like = false
    return (
        <div className="col-lg-3 col-md-6 mb-4 cardies">
            
            <div className="card card-articles">
                <div className="inner-img">
                    <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} className="card-img-top" alt="..." />
                </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.title}</h5>
                        <p className="card-text">{item.content.slice(0, 130)}
                        <Link to={`/article/${item.article_id}`}>... Read more</Link></p>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                        <div>
                            <i className={`bi bi-hand-thumbs-up${like?`-fill` : ``} me-1`}></i>
                            <small className="text-muted">12k likes</small>
                        </div>
                        <div>
                            <i className="bi bi-clock-history me-1"></i>
                            <small className="text-muted">{item.created_at}</small>
                        </div>
                        <i className="bi bi-bookmark"></i>
                    </div>
            </div>
        </div>
    )
}

export default CardArticles