import { useParams } from "react-router-dom";
import { useGetArticleIdQuery } from "../../features/article/articleSlice";

const Content = () => {

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
        content = article.data.map((item, index) => <Render key={item.article_id} item={item} />)
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

     return content
    
}

const Render = (props) => {
    const {item} = props
    return(<div className="container-fluid m-3 text-align-center">
    <p className="font-m">{item.content}</p>
</div>)
}

export default Content