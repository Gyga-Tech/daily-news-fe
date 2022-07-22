import React from "react";
import "./ContentStory.css"
const ContentStory = () => {
    return (<>

        <div className="section-story d-flex flex-row">
            <div className="row-card d-flex flex-row mt-5 ">
                <div className="card-left d-flex flex-column">
                    <div className="title">
                        <h3>Let's hear about <br /> Kayla's success story</h3>
                    </div>
                    <div className="tagline">
                        <p>See how well News Today works in a <br /> real user's life.</p>
                    </div>
                    <div className="started">
                        <button className="btn btn-primary">Let's Started</button>
                    </div>
                </div>
                <div className="card-right mx-auto">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </>)

}

export default ContentStory