import {Link, useSearchParams} from "react-router-dom"
import { useGetArticleIdQuery, useGetArticleQuery } from "../../features/article/articleSlice";
import  {useEffect, useState} from "react"

const Content2 = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState("")
    // useEffect(() => {
        
    //     setQuery(searchParams.get("category"))
    //     refetch()
    // }, [query])
    

    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetArticleQuery({categories: searchParams.get("category")})

    //  setQuery(searchParams.get("category"))
    let content;
    if(isLoading) {
        content = <h1>Loading...</h1>
    } else if(isSuccess) {
        content = article.data.map((item, index) => <Render key={item.movie_id} item={item} />)
    } else if  (isError) {
        content = <h1>Error</h1>
    }
     
    return(<>
        {content}
    </>)
}

const Render = (props) => {
    const {item} = props


    return(<div className="col-md-4">
    <div className="image-category">
        <img src={`http://localhost:5000/static/${item.cover}`} width="369px" alt="category"/>
    </div>
    <div className="p-3 border-bottom ">
        <h3 className="font-xl bold text-center">{item.title}</h3>
    </div>

    <div className="p-3  border-bottom">
        <h3 className="font-m bold">Description:</h3>
        <p>All articles in Country are mostly explaining facts about
         countries and teir condition. See update form category so 
         you won’t miss a thing!</p>
    </div>
    <div className="p-3 mb-3">
        <p className="font-s mb-1"><span className="bold">Total Articles: </span> 112 Articles</p>
        <p className="font-s mb-1"><span className="bold">Date Created: </span> jan 12th 2020</p>
    </div>
    <div className="d-flex justify-content-center my-3">
    <Link to={`article/${item.movie_id}`}><button className="btn btn-primary btn-explore font-m bold">Explore Category</button></Link>
    </div>
    
</div>)
}
export default Content2