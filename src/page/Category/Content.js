import { useAddArticleMutation, useGetArticleQuery } from "../../features/article/articleSlice"

const Content = () => {
    const {
        data: category,
        isLoading,
        isError,
        error,
        isSuccess
    } = useGetArticleQuery()
    let content;
    if(isLoading) {
        content = <h1>Loading</h1>
    } else if(isSuccess) {
        // content = article.map((item) => <img src={item.url} alt="article" />)
        content = category.map((item) => <div className="col m-3">
        <div className="" style={{width: "150px"}}>
        <div className="container-card mb-3">
            <img src={item.thumbnailUrl} alt="category" />
        </div>
        <h3 className="font-m bold text-center">Sports</h3>
        </div>
        
    </div>)
    } else if (isError) {
        console.log(error)
        content = <h1>error</h1>
    }

    return(
    <div className="col-md-8 p-5">
    
        <div className="row m-3">
            <div className="col-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Sort By</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
        </div>
        <div className="row">
            {content}
        </div>
        
    </div>)
}

export default Content