import React from "react";
import bg from "../../../src/assets/img/man.jpg"

const Headers = ()=>{
    return(<>

        <div className="section-article-list d-flex flex-column" style={{ backgroundImage: `linear-gradient(to left, rgba(255,0,0,0), rgba(255,255,255,1)), url(${bg})` ,width: "100%", height: "50vh", backgroundSize: "100%", height:"610px"}}>
            <div className="title">
                <h1 style={{fontFamily:"Georgia", fontWeight:"bold", marginLeft:"5rem", marginTop:"10rem"}}>Choose Article by <br/> Category </h1>
            </div>
            <div className="content">
                <p style={{fontFamily: "lato", fontSize:"0.9rem", color:"#0D253C", marginLeft:"5rem"}}>Category helps you to read another article that you <br/> 
                haven’t thought before. You able to read all articles for <br/> free. Enjoy the reading!</p>
            </div>
        </div>

    </>)
}
export default Headers