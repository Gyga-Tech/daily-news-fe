import { useParams, useSearchParams } from "react-router-dom"
import { useGetArticleIdQuery } from "../../features/article/articleSlice"
import "./index.css"

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    let params = useParams()
    const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetArticleIdQuery(params.articleId)

    let content;
    if(isLoading) {
        content = <h1>Loading</h1>
    } else if(isSuccess) {
        console.log(article)
        // content = article.map((item) => <img src={item.url} alt="article" />)
        // content = <img src={article.url} width="595px" alt="article" />
        content = article?.data?.map((item, index) => <Render key={item.article_id} item={item} />)
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

     return content
}

const Render = (props) => {
    const {item} = props

    return(<>
        <div className="row m-5">
            <div className="col-2 mb-3">
            <h4 className="font-s bold">Back</h4>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
                <h3 className="font-l">Artcile View</h3>
            </div>
            <div className="col-2">
                <img/>
            </div>
        </div>
        <div className="row justify-content-between m-5">

            <div className="col-md-5 p-2">
                <div className="thumbnail d-flex align-items-center">
                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} width="595px" alt="article" />
                </div>
                
                {/* <img alt="contet-image"/> */}
            </div>
            <div className="col-md-5 ">
            <div className="container d-flex flex-column m-3">
            <div className="d-flex flex-wrap my-3 justify-content-center mb-1">
            <h1 className="font-xl ">{item.title}</h1>
            </div>
            <div className="d-flex flex-column my-1">
                <p className="font-s mb-1">Richard Gervain - Author</p>
                <h4 className="font-xs ">{item.created_at}</h4>
            </div>
            <div className="d-flex mt-3">
                <div className="d-flex me-3">
                <i className="bi bi-hand-thumbs-up me-2"></i>
                <p className="font-s me-2">2.1k</p>
                </div>
                <i className="bi bi-bookmark-star"></i>
            </div>
            <div className="d-grid gap-2 mx-3 mb-3 ">
            <button className="btn btn-secondary btn-lg">Share Article Link</button>
            </div>
           

            </div>
            
            </div>
        </div>
    </>)
}

export default Header