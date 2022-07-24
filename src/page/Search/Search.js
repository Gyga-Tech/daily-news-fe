import React from "react";
import { useState } from "react";
import { useGetArticleQuery } from "../../features/article/articleSlice";
import imgcontent from "../../assets/img/health-horizontal.png"
import { Link } from "react-router-dom";

const Loading = () => {
    return <div>Loading....</div>
}

//SEARCH
const Search = () => {
    const [query, setQuery] = useState("")
    const [sort, setSort] = useState({})
    const {
        data: article,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetArticleQuery(sort)

    return (<>
        <div className="section-search d-flex flex-column bg-white">
            <div className="search-header d-flex flex-row justify-content-between" style={{ marginTop: "5rem" }}>
                <div className="search-title">
                    {/* <i className="bi bi-search mx-3"><input className="mx-2" type="search" placeholder="type here" style={{ border: "none", outline: "none" }}></input></i> */}
                    <div className="input-group flex-nowrap" style={{ marginLeft: "5rem" }}>
                        <span className="input-group-text bi bi-search" id="addon-wrapping"></span>
                        <input type="text" class="form-control" placeholder="type here" aria-label="Username" aria-describedby="addon-wrapping" onChange={event => setQuery(event.target.value)} />
                    </div>
                </div>
                <div className="filter" style={{ marginRight: "8rem" }}>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bi bi-funnel-fill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" >Name (A-Z) </a></li>
                            <li><a className="dropdown-item" href="#">Name (Z-A) </a></li>
                            <li><a className="dropdown-item" href="#">Category</a></li>
                            <li><a className="dropdown-item" onClick={()=>setSort(prevState=> ({...prevState, sortby: "created_at"}))}>Last Added</a></li>
                            <li><a className="dropdown-item" href="#">Last Modified</a></li>                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="search-result" style={{ marginLeft: "5rem", marginTop: "3rem" }}>
                <h6>Search result for {query}</h6>
            </div>
            <div className="tags d-flex flex-row" style={{ marginLeft: "5rem", marginTop: "1rem", marginBottom: "2rem" }}>
                <div className="related-tags d-flex align-items-center">
                    <h6>Related Tags:</h6>
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
                    return (
                        <Link to={`/article/${item.categories_id}`} style={{textDecoration:"none", color:"#0D253C"}}>
                        <div className="card-article-list d-flex flex-column mx-2 shadow-lg mb-5 bg-body rounded text-center" style={{ width: "260px", height: "293px" }}>
                            <div className="header-content d-flex" key={index}>
                                <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt={item.title} title={item.title} style={{ width: "260px", height: "146px" }} />
                            </div>
                            <div className="title-content mt-3">
                                <h6 style={{ fontWeight: "bold" }}>{item.title.substring(0,20)}</h6>
                            </div>
                            <div className="fill-content">
                                <p>{item?.content?.substring(0, 50)}...</p>
                                <hr />
                            </div>
                            <div className="properties d-flex flex-row justify-content-between" style={{ fontSize: "0.8rem" }}>
                                <div className="like d-flex flex-row mx-3">
                                    <i class="bi bi-hand-thumbs-up"></i>
                                    <p className="mx-1">2.1k</p>
                                </div>
                                <div className="time d-flex flex-row mx-3">
                                    <i className="bi bi-clock"></i>
                                    <p className="mx-1">{item?.created_at}</p>
                                </div>
                                <div className="tagged d-flex flex-row mx-3">
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