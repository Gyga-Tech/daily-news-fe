import React from "react"
import Content from "./Content"
import ContentLatestNews from "./ContentLatestNews"
import ContentStory from "./ContentStory"
import Headers from "./Headers"

const Home = () => {

    return(
        <>
        <div>Ini Home</div>
        <Headers/>
        <Content/>
        <ContentStory/>
        <ContentLatestNews/>
        </>
    )
}

export default Home