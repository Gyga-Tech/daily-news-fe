import Card from './Card'
import { Link } from "react-router-dom";
import './ContentArticles.css'
import { useGetArticleQuery } from '../../features/article/articleSlice';

const Content = () => {
    return (
        <div>
            <div className='p-5'>
                <div class="btn-group button-filter">
                    <button class="btn btn-secondary btn-sm dropdown-toggle bi bi-funnel icon-filter" type="button" data-bs-toggle="dropdown">
                        Sort Here
                    </button>
                    <ul class="dropdown-menu menu-filter">
                        <li><a class="dropdown-item" href="#">Category</a></li>
                        <li><a class="dropdown-item" href="#">Last Added</a></li>
                        <li><a class="dropdown-item" href="#">Last Modified</a></li>    
                    </ul>
                </div>
               
                {/* <div className="articles-class">
                    <h4>Trending</h4>
                    <Link to="/search"><h6 className="view-more">View More</h6></Link>
                </div> */}
                {/* <div className='row article-row'>
                    {array.map(()=><Card />)}
                </div> */}

                <RowEconomy />
                <RowPolitics />
                <RowCountry />
                <RowHealth />
                <RowBeauty />
            </div>
        </div>
    )
}

const RowEconomy = () => {
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({categories: 1, limit: 4})

    let render
    if(isLoading) {
        render = <h1>Loading...</h1>
    } else if(isSuccess) {
        render = article.data.results.map((item)=><Card item={item} />)
    } else if(isError) {
        render = <h1>{error.originalStatus}</h1>
    }

    return(<>
        <div className="articles-class">
            <h4>Economy</h4>
            <Link to="/search"><h6 className="view-more">View More</h6></Link>
        </div>
        <div className='row article-row'>
            {render}
        </div>
    </>)
}

const RowPolitics = () => {
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({categories: 2, limit: 4})

    let render
    if(isLoading) {
        render = <h1>Loading...</h1>
    } else if(isSuccess) {
        render = article.data.results.map((item)=><Card item={item} />)
    } else if(isError) {
        render = <h1>{error.originalStatus}</h1>
    }

    return(<>
        <div className="articles-class">
            <h4>Politics</h4>
            <Link to="/search"><h6 className="view-more">View More</h6></Link>
        </div>
        <div className='row article-row'>
            {render}
        </div>
    </>)
}

const RowCountry = () => {
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({categories: 3, limit: 4})

    let render
    if(isLoading) {
        render = <h1>Loading...</h1>
    } else if(isSuccess) {
        render = article.data.results.map((item)=><Card item={item} />)
    } else if(isError) {
        render = <h1>{error.originalStatus}</h1>
    }

    return(<>
        <div className="articles-class">
            <h4>Country</h4>
            <Link to="/search"><h6 className="view-more">View More</h6></Link>
        </div>
        <div className='row article-row'>
            {render}
        </div>
    </>)
}

const RowHealth = () => {
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({categories: 4, limit: 4})

    let render
    if(isLoading) {
        render = <h1>Loading...</h1>
    } else if(isSuccess) {
        render = article.data.results.map((item)=><Card item={item} />)
    } else if(isError) {
        render = <h1>{error.originalStatus}</h1>
    }

    return(<>
        <div className="articles-class">
            <h4>Health</h4>
            <Link to="/search"><h6 className="view-more">View More</h6></Link>
        </div>
        <div className='row article-row'>
            {render}
        </div>
    </>)
}

const RowBeauty = () => {
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({categories: 5, limit: 4})

    let render
    if(isLoading) {
        render = <h1>Loading...</h1>
    } else if(isSuccess) {
        render = article.data.results.map((item)=><Card item={item} />)
    } else if(isError) {
        render = <h1>{error.originalStatus}</h1>
    }

    return(<>
        <div className="articles-class">
            <h4>Beauty</h4>
            <Link to="/search"><h6 className="view-more">View More</h6></Link>
        </div>
        <div className='row article-row'>
            {render}
        </div>
    </>)
}

export default Content