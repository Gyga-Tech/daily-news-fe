import "./Card.css";
import React from "react";

const CardArticles = () => {
    const like = true
    return (
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-evenly">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                        <div>
                            <i className={`bi bi-hand-thumbs-up${like?`-fill` : ``} me-1`}></i>
                            <small className="text-muted">12k likes</small>
                        </div>
                        <div>
                            <i className="bi bi-clock-history me-1"></i>
                            <small className="text-muted">Updated 3 mins ago</small>
                        </div>
                        <i className="bi bi-bookmark"></i>
                    </div>
            </div>
        </div>
    )
}

export default CardArticles