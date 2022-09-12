import { useParams } from "react-router-dom";
import { useGetArticleIdQuery, useGetArticleQuery} from "../../features/article/articleSlice";
import { Link } from "react-router-dom";
import moment from "moment/moment";


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

    const extractContent = (content) => {
        const span = document.createElement('span')
        span.innerHTML = content
        return span.textContent || span.innerHTML
    }

    const content = extractContent(item.content).substring(0,50)
    return(
        <Link to={`/article/${item.article_id}`}  style={{color: "#0D253C", textDecoration: "none"}} >
            <div className="card me-3 mb-3 shadow-lg" style={{width: '16rem', height: "23rem" }}>
             <div style={{height: "13rem", overflow: "hidden"}}>
                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} className="card-img-top" alt={item.title}/>
             </div>
            <div className="card-body p-2">
                <h5 className="card-title text-center bold " >{item.title.substring(0,40)}...</h5>
                <p className="card-text" >{content?.length < 50 ? content : `${content}...`}</p>
               
            </div>
            <div className="card-footer">
            <div className="d-flex justify-content-evenly align-items-center">
                <div className="d-flex">
                    <i className="bi bi-hand-thumbs-up me-1"></i>
                    <p className="font-s mb-1">21k</p>
                </div>
                <div className="d-flex">
                <i className="bi bi-clock me-1"></i>
                    <p className="font-s mb-1">{moment(item.updated_at).startOf('day').fromNow()}</p>
                </div>
                <i class="bi bi-bookmark"></i>
                </div>
                
                
                </div>
        </div>
        </Link>
        
    )
}

export default Section2