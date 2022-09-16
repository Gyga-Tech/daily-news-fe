import React from "react";
import { Link } from "react-router-dom";
import './HeaderArticles.css'

const HeaderSection = () => {
    return (
            <section className="header-articles">
                <div className="title-header-articles">
                    <h1>Start Writing an Article</h1>
                    <p>You can be an author by being active in reading artciles
                        in a month or you can request to be an author if you have been a member for three months</p>
                    <Link to="/addarticles"><button className="btn btn-primary rounded-2 bold">Start Writing</button></Link>
                </div>

            </section>
    )

}

export default HeaderSection