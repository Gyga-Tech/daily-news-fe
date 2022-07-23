import React from "react";
import './Header.css'

const HeaderSection = () => {
    return (
        <section className="header">
            <div className="title">
                <h1>Start Writing an Article</h1>
                <p>You can be an author by being active in reading artciles
                    in a month or you can request to be an author if you have been a member for three months</p>
                <button className="btn btn-primary">Start Writing</button>
            </div>

        </section>

    )

}

export default HeaderSection