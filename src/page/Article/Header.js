import { useGetArticleIdQuery } from "../../features/article/articleSlice"
import asian1 from '../../assets/img/ASEAN1.png'
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
    if (isLoading) {
        content = <h1>Loading</h1>
    } else if (isSuccess) {
        console.log(article)
        // content = article.map((item) => <img src={item.url} alt="article" />)
        content = <img src={article.url} width="595px" alt="article" />
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

    return (<>
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
            <div className="col-md-6 p-2">
                <div className="thumbnail d-flex align-items-center">
                    <img src={asian1} className="img-article1" alt="..." />
                    {content}
                </div>

                {/* <img alt="content-image"/> */}
            </div>
            <div className="col-md-6">
                <div className="container content">
                    <div className="d-flex title">
                        <h1 className="font-xl">Thailand at 2019 Southeast Asian games</h1>
                    </div>
                    <div className="d-flex flex-column my-3">
                        <p className="font-s">Richard Gervain - Author</p>
                        <h4 className="font-xs">Wed, March 3rd 2021</h4>
                    </div>
                    <div className="d-flex info">
                        <i className="bi bi-hand-thumbs-up icon"></i>
                        <p>2.1k</p>
                        <i className="bi bi-bookmark-star icon"></i>
                    </div>
                    <button>Edit Article</button>
                    <select>
                        <option selected>Add to category</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                </div>
            </div>
        </div>
    </>)
}

export default Header