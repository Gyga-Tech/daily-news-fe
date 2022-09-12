import { useParams, useSearchParams } from "react-router-dom"
import { useGetArticleIdQuery } from "../../features/article/articleSlice"
import asian1 from '../../assets/img/ASEAN1.png'
import "./index.css"
import moment from "moment"

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
    if (isLoading) {
        content = <h1>Loading</h1>
    } else if (isSuccess) {
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
        <div className="row m-5 nav-article">
            <div className="col-2 back-chevron">
                <i class="bi bi-chevron-left"></i>
                <h4 className="font-s bold">Back</h4>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
                <h3 className="font-l">Article View</h3>
            </div>
            <div className="col-2 share-article">
                <i class="bi bi-box-arrow-up-right"></i>
            </div>
        </div>
        <div className="row justify-content-between content-article">
            <div className="col-md-5 p-2">
                <div className="thumbnail d-flex align-items-center">
                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} width="595px" alt="article" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="container content-artcle">
                    <div className="d-flex title">
                        <h1 className="font-xl ">{item.title}</h1>

                    </div>
                    <div className="d-flex flex-column my-3">
                        <p className="font-s">Richard Gervain - Author</p>
                        <h4 className="font-xs ">{moment(item.updated_at).format('MMMM DD YYYY') }</h4>
                    </div>
                    <div className="d-flex info">
                        <i className="bi bi-hand-thumbs-up icon"></i>
                        <p>2.1k</p>
                        <i className="bi bi-bookmark-star icon"></i>
                    </div>
                    <div className="d-grid gap-2 mx-3 mb-3 ">
                    <button className="btn btn-secondary btn-lg">Share Article Link</button>
                    </div>
                    {/* <button className="btn-edit">Edit Article</button>
                    <select className="select-edit">
                        <option selected>Add to category</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select> */}
                </div>
            </div>
        </div>
    </>)
}

export default Header