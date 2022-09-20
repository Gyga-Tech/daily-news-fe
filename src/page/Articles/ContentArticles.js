import Card from './Card'
import { Link } from "react-router-dom";
import './ContentArticles.css'
import { useGetArticleQuery } from '../../features/article/articleSlice';
import { useState } from 'react';

const Content = () => {
    const [sortArticles, setSortArticles] = useState ({limit:12})
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetArticleQuery(sortArticles)

    return (
        <div>
            <div className='p-5 container-fluid'>
                <div class="btn-group button-filter mb-4 ">
                    <button class="btn btn-secondary btn-sm dropdown-toggle bi bi-funnel icon-filter rounded-2" type="button" data-bs-toggle="dropdown">
                        Sort Here
                    </button>
                    <ul class="dropdown-menu menu-filter">
                        <li><a class="dropdown-item" onClick={()=>{setSortArticles(prevState=> ({...prevState, sortby: "categories_id"})); refetch()}}>Category</a></li>
                        <li><a class="dropdown-item" onClick={()=>setSortArticles(prevState=> ({...prevState, sortby: "created_at"}))}>Last Added</a></li>
                        <li><a class="dropdown-item" onClick={()=>setSortArticles(prevState=> ({...prevState, sortby: "updated_at"}))}>Last Modified</a></li>    
                    </ul>
                </div>
               
                {/* <div className="articles-class">
                    <h4>Trending</h4>
                    <Link to="/search"><h6 className="view-more">View More</h6></Link>
                </div> */}
                {/* <div className='row article-row'>
                    {array.map(()=><Card />)}
                </div> */}

                <RowEconomy sortby={sortArticles.sortby}/>
                <RowPolitics />
                <RowCountry />
                <RowHealth />
            </div>
        </div>
    )
}

const RowEconomy = (props) => {
    const {sortby} = props
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({sortby: sortby, categories: 1, limit: 4})

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
            <h4 className='bold mb-3' >Economy</h4>
            <Link to={`/category/article/${1}`}><h6 className="view-more color-primary">View More</h6></Link>
        </div>
        <div className='row article-row justify-content-evenly'>
            {render}
        </div>
    </>)
}

const RowPolitics = (props) => {
    const {sortby} = props
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({sortby: sortby, categories: 29, limit: 4})

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
            <h4 className='bold mb-3'>Politics</h4>
            <Link to={`/category/article/${2}`}><h6 className="view-more color-primary">View More</h6></Link>
        </div>
        <div className='row article-row justify-content-evenly'>
            {render}
        </div>
    </>)
}

const RowCountry = (props) => {
    const {sortby} = props
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({sortby: sortby, categories: 3, limit: 4})

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
            <h4 className='bold mb-3'>Country</h4>
            <Link to={`/category/article/${3}`}><h6 className="view-more color-primary">View More</h6></Link>
        </div>
        <div className='row article-row justify-content-evenly'>
            {render}
        </div>
    </>)
}

const RowHealth = (props) => {
    const {sortby} = props
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery({sortby: sortby, categories: 4, limit: 4})

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
            <h4 className='bold mb-3'>Health</h4>
            <Link to={`/category/article/${4}`}><h6 className="view-more color-primary">View More</h6></Link>
        </div>
        <div className='row article-row justify-content-evenly'>
            {render}
        </div>
    </>)
}



export default Content