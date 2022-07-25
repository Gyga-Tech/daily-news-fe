import { useParams } from "react-router-dom";
import { useGetArticleIdQuery, useGetArticleQuery} from "../../features/article/articleSlice";
import { Link } from "react-router-dom";

const Section2 = () => {
    let params = useParams() 

    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({
        categories: params.categoryId,
        limit: 6,
        page: 1,
        sortby: "created_at",
        order: "desc" 
    })

    let content;
    if(isLoading) {
        content = <h1>Loading...</h1>
    } else if(isSuccess) {
        content = article.data.results.map((item, index) => <Render key={item.article_id} item={item} />)
    } else if  (isError) {
        content = <h1>Error</h1>
    }

    return(
        <section className="d-flex flex-wrap m-5 ">
            {content}
        </section>
        
    )
}

const Render = (props) => {

    const {item} = props
    console.log(item.cover)
    return(
        <Link to={`/article/${item.article_id}`}  style={{color: "#0D253C", textDecoration: "none"}} >
            <div class="card me-3 mb-3" style={{width: '16rem', height: "23rem" }}>
             <div style={{height: "13rem", overflow: "hidden"}}>
                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} class="card-img-top" alt={item.title}/>
             </div>
            <div class="card-body p-2">
                <h5 class="card-title text-center bold ">{item.title.substring(0,40)}...</h5>
                <p class="card-text">{item.content.substring(0,50)}...</p>
               
            </div>
            <div className="card-footer">
            <div className="d-flex justify-content-evenly align-items-center">
                <div className="d-flex">
                    <i className="bi bi-hand-thumbs-up me-1"></i>
                    <p className="font-s mb-1">21k</p>
                </div>
                <div className="d-flex">
                <i className="bi bi-clock me-1"></i>
                    <p className="font-s mb-1">3m ago</p>
                </div>
                <i class="bi bi-bookmark"></i>
                </div>
                
                
                </div>
        </div>
        </Link>
        
    )
}

export default Section2