import { useGetArticleIdQuery } from "../../features/article/articleSlice"
import "./index.css"

const Header = () => {

    const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetArticleIdQuery(1)

    let content;
    if(isLoading) {
        content = <h1>Loading</h1>
    } else if(isSuccess) {
        console.log(article)
        // content = article.map((item) => <img src={item.url} alt="article" />)
        content = <img src={article.url} width="595px" alt="article" />
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

     return(<>
        <div className="row m-5">
            <div className="col-2 mb-3">
            <i className="bi bi-send"></i>
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

            <div className="col-md-6 p-2">
                <div className="thumbnail d-flex align-items-center">
                {content}
                </div>
                
                {/* <img alt="contet-image"/> */}
            </div>
            <div className="col-md-6 ">
            <div className="container d-flex flex-column m-3">
            <div className="d-flex flex-wrap my-3">
            <h1 className="font-xl">Thailand at 2019 Southeast Asian games</h1>
            </div>
            <div className="d-flex flex-column my-3">
                <p className="font-s">Richard Gervain - Author</p>
                <h4 className="font-xs ">Wed, 12</h4>
            </div>
            <div className="d-flex flex-column my-3">
                <i className="bi bi-hand-thumbs-up"></i>
                <p className="font-s me-2">2.1k</p>
                <i className="bi bi-bookmark-star"></i>
            </div>
            <div className="d-grid gap-2 m-3 ">
            <button className="btn btn-secondary btn-lg">Share Article Link</button>
            </div>
           

            </div>
            
            </div>
        </div>
     </>)
}

export default Header