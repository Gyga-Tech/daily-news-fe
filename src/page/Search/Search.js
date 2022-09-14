import React, { useEffect } from "react";
import { useState } from "react";
import { useGetArticleQuery } from "../../features/article/articleSlice";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import moment from 'moment'

const Loading = () => {
    return <div>Loading....</div>
}

//SEARCH
const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState('')
    const [sort, setSort] = useState({ limit: 12, search: searchParams.get('title') })
    const [title, setTitle] = useState('')
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery(sort)

    useEffect(() => {
        setSort((prev) => ({...prev, search: searchParams.get('title')}))
    },[searchParams.get('title')])

    return (<>
        <div className="section-search d-flex flex-column bg-white">
            <div className="search-header  d-flex flex-row align-items-center justify-content-between mb-4" style={{ marginTop: "5rem" }}>
                {/* <div className="search-title">
                    <div className="input-group flex-nowrap" style={{ marginLeft: "5rem" }}>
                        <span className="input-group-text bi bi-search" id="addon-wrapping"></span>
                        <input type="text" class="form-control" placeholder="type here" aria-label="Username" 
                        aria-describedby="addon-wrapping" value={query} 
                        onChange={event => setQuery(event.target.value)} />
                    </div>
                </div> */}
                <div className="search-result " style={{ marginLeft: "5rem",  }}>
                    <h4 className="mb-0">Search result for <span className="bold">{searchParams.get('title')}</span></h4>
                </div>
                <div className="filter " style={{ marginRight: "8rem" }}>
                    <div className="dropdown ">
                        <button className="btn btn-secondary  rounded-3 dropdown-toggle bi bi-funnel-fill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" >Name (A-Z) </a></li>
                            <li><a className="dropdown-item" onClick={() => setSort(prevState => ({ ...prevState, sortby: "title" }))}>Name (Z-A) </a></li>
                            <li><a className="dropdown-item" onClick={() => setSort(prevState => ({ ...prevState, sortby: "categories_id" }))}>Category</a></li>
                            <li><a className="dropdown-item" onClick={() => setSort(prevState => ({ ...prevState, sortby: "created_at" }))}>Last Added</a></li>
                            <li><a className="dropdown-item" onClick={() => setSort(prevState => ({ ...prevState, sortby: "updated_at" }))}>Last Modified</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="tags d-flex flex-row" style={{ marginLeft: "5rem", marginTop: "1rem", marginBottom: "2rem" }}>
                <div className="related-tags d-flex align-items-center">
                    <h6 className="bold" 
                        style={{textShadow: '0 2px 3px #888'}}
                    >Related Tags:</h6>
                </div>
                <div className="list-tags d-flex flex-row justify-content-between">
                    <div className="btn btn-light text-primary">#ladygaga</div>
                    <div className="btn btn-light text-primary">#jokowidodo</div>
                    <div className="btn btn-light text-primary">#dayniki</div>
                </div>
            </div>
            <div className="search-article-list d-flex flex-row flex-wrap" style={{ marginLeft: "5rem" }}>
                {isLoading ? (<Loading />) : article?.data?.results?.filter(item => {
                    if (query === '') {
                        return article.data.results
                    } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                        return article.data.results
                    }
                }).map((item, index) => {
                    const extractContent = (content) => {
                        const span = document.createElement('span')
                        span.innerHTML = content
                        return span.textContent || span.innerHTML
                    }

                    const content = extractContent(item.content).substring(0,100)
                    return (
                        <Link to={`/article/${item.categories_id}`} style={{ textDecoration: "none", color: "#0D253C" }}>
                            <div className="card-article-list d-flex flex-column justify-content-between mx-3 shadow-lg mb-5 bg-body rounded-2 text-center" style={{ width: "260px", height: '90%' }}>
                                <div className="header-content d-flex" key={index}>
                                    <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt={item.title} title={item.title} style={{ width: "260px", height: "146px" }} />
                                </div>
                                <div className="title-content mt-3">
                                    <h6 style={{ fontWeight: "bold", textShadow: '0 2px 2px #999' }}>
                                    {item.title.substring(0, 30).length > 30 ? item.title.substring(0, 20) + "..." : item.title }</h6>
                                </div>
                                <div className="fill-content font-xs mx-2">
                                    <p className="mb-0">{content?.length < 100 ? content : `${content}...`}</p>
                                </div>
                                <div className="properties d-flex py-2 px-3 border-top align-items-center justify-content-evenly font-xs" style={{}}>
                                    <div className="like d-flex align-items-center ">
                                        <i class="bi bi-hand-thumbs-up"></i>
                                        <p className="mx-1 mb-0">2.1k</p>
                                    </div>
                                    <div className="time d-flex align-items-center ">
                                        <i className="bi bi-clock"></i>
                                        <p className="ms-2 font-xs mb-0 ">{moment(`${item?.created_at}`).startOf('minutes').fromNow()}</p>
                                    </div>
                                    <div className="tagged d-flex align-items-center ">
                                        <i className="bi bi-tag"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                {isError && (<h1>Error</h1>)}
            </div>
        </div>


    </>)
}

export default Search