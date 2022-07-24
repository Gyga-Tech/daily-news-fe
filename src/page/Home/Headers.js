import React from "react";
// import background from "../../img/"
import "./Headers.css"

const Headers = ()=>{
    return(
    <>
    <div className="section-headers d-flex flex-column" style={{backgroundImage: `url(/bgImage.png)`, height:"600px"}}>
    {/* linear-gradient(3600deg, left, rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0)) , */}
        <div className="title mx-5 mt-5">
            <h1 style={{fontFamily:'Georgia', color:'#0D253C', fontWeight: '700'}}>Share Information <br/> and Educate People</h1>
        </div>
        <div className="content mx-5 mt-3">
            <p style={{fontFamily:'Lato'}}>Everyone has their point of view of something, but just <br/> 
                don't be afraid to express the facts. Be an author and <br/>
                share you prespective of something to the world.
            </p>
        </div>
        <div className="explore mx-5 mt-3">
            <button className="btn btn-primary">Start Exploring</button>
        </div>
    </div>
    </>
    )
}

export default Headers