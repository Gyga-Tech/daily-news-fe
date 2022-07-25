import { useParams } from "react-router-dom";
import { useGetArticleIdQuery, useGetArticleQuery} from "../../features/article/articleSlice";
import { Link } from "react-router-dom";

const Content = () => {

    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({
        limit: 10,
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
        <section className="d-flex flex-wrap m-5 justify-content-center">
            {content}
        </section>
        
    )
}

const Render = (props) => {

    const {item} = props
    console.log(item.cover)
    return(
        <div className="me-3 mb-3">
            <Link to={`/article/${item.article_id}`}  style={{color: "#0D253C", textDecoration: "none"}} >
            <div class="card  mb-3" style={{width: '16rem', height: "23rem" }}>
             <div style={{height: "13rem", overflow: "hidden"}}>
                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} class="card-img-top" alt={item.title}/>
             </div>
            <div class="card-body p-2">
                <h5 class="card-title text-center bold ">{item.title.substring(0,40)}...</h5>
                <p class="card-text">{item.content.substring(0,50)}...</p>
               
            </div>
            </div>
        </Link>
        <div className="row justify-content-around mb-3">
            <div className="col-5 d-grid gap-2">
                <button className="btn btn-primary">Accept</button>
            </div>
            <div className="col-5 d-grid gap-2">
                <button className="btn btn-light text-primary bold">Decline</button>
            </div>
           
        </div>
        </div>
       
        
    )
}

export default Content