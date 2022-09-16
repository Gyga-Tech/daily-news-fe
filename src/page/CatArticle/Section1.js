import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetArticleQuery } from "../../features/article/articleSlice";
import {useState} from "react"
import { useGetCategoriesQuery } from "../../features/categories/categoriesSlice";
const Section1 = () => {
    let params = useParams()
    const [query, setQuery] = useState()

    const {
        data: article,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetCategoriesQuery()


    
     let content;
    if(isLoading) {
        content = <h1>Loading...</h1>
    } else if(isSuccess) {
        content = article.data.map((item, index) => <Link key={index} to={`/category/article/${item.categories_id}`}>
        <button 
            className={`btn btn-light ${params.categoryId == item.categories_id ? "text-primary bold active" : ""} me-3`}
         >{item.categories_name}</button>
        </Link>)
    } else if  (isError) {
        content = <h1>Error</h1>
    }

    
    
    return(
    <>
        <section className="mx-3 mt-3 ">
            <div className="d-flex mb-3 justify-content-center mb-3">
            {content}
            </div>
                
        </section>
        
    </>)
}

export default Section1