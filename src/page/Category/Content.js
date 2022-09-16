import { Link } from "react-router-dom";
import { useAddArticleMutation, useGetArticleQuery } from "../../features/article/articleSlice"
import {useSearchParams} from "react-router-dom"
import { useGetCategoriesQuery } from "../../features/categories/categoriesSlice";
import './index.css'

const Content = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    // const [filter, setFilter] = useState({})
    const {
        data: category,
        isLoading,
        isError,
        error,
        isSuccess
    } = useGetCategoriesQuery()

    let content;
    if(isLoading) {
        content = <h1>Loading</h1>
    } else if(isSuccess) {
        // content = article.map((item) => <img src={item.url} alt="article" />)
        content = category?.data?.map((item) => <Link to={`/category/article/${item.categories_id}`} 
        onClick={() => setSearchParams({category: item.categories_id})}
         className="col m-3"
         style={{textDecoration: "none", color: "#0D253C"}}>
        <div className="d-flex flex-column justify-content-between " style={{width: "150px"}}>
        <div className="category-img mb-3 mb-5 overflow-hidden rounded-2 shadow-lg">
            <img
            style={{height: '200px', width: '150px'}} 
            // className="img-fluid"
            src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
             alt={item.categories_name} />
        </div>
        <h3 className="font-m bold text-center ">{item.categories_name}</h3>
        </div>
        
    </Link>)
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

    return(
    <div className="col p-5">
    
        {/* <div className="row m-3">
            <div className="col-3">
            <select class="form-select" aria-label="Default select example" 
            onChange={() => }>
                <option selected>Sort By</option>
                <option value="desc">A-Z</option>
                <option value="asc">Z-A</option>
                <option value="created_at">Created_at</option>
            </select>
            </div>
        </div> */}
        <div className="row m-3">
            {content}
        </div>
        
    </div>)
}

export default Content