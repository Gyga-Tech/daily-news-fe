import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useGetArticleQuery } from '../../features/article/articleSlice'
import { Link } from 'react-router-dom'
import moment from 'moment'
import parse from 'html-react-parser'
import './ContentLatestNews.css'

const Loading = () => {
  return <div>Loading....</div>
}

const ContentLatestNews = () => {
  const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticleQuery({})

  return (
    <>
      <div className="container">
        <div className="title mt-5 mb-3">
          <h6>Latest News</h6>
        </div>
        <div className="latest-news-list d-flex flex-column">
          {isLoading ? (
            <Loading />
          ) : (
            article.data.results.slice(0, 3).map((item, index) => {
              return (
                <>
                  <div
                    className="card-latest-news-list"
                    style={{
                      width: '100%',
                      height: '250px',
                    }}
                  >
                    <div className="cover col-md-2" key={index}>
                      <img
                        src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
                      ></img>
                    </div>
                    <div className="content col-md-8">
                      <div className="content-title">
                        <h6>{item.title.slice(0, 100)}</h6>
                      </div>
                      <div className="content-fill">
                        <p style={{ width: '100%', height: '150px' }}>
                          {parse(`${item.content.slice(0, 150)}`)}
                        </p>
                      </div>
                      <div className="properties-info">
                        <div className="like">
                          <i class="bi bi-hand-thumbs-up mx-2"></i>
                          <p className="mx-2">2.1k</p>
                        </div>
                        <div className="time">
                          <i className="bi bi-clock"></i>
                          <p className="mx-2">
                            {moment(`${item?.created_at}`)
                              .startOf('minutes')
                              .fromNow()}
                          </p>
                        </div>
                        <div className="tagged">
                          <i className="bi bi-tag"></i>
                        </div>
                      </div>
                    </div>
                    <div className="read-now col-md-2">
                      <Link
                        to={`/article/${item.article_id}`}
                        style={{
                          textDecoration: 'none',
                          color: '#0D253C',
                        }}
                      >
                        <button className="btn btn-primary">Read now</button>
                      </Link>
                    </div>
                  </div>
                </>
              )
            })
          )}
          {isError && <h1>Error</h1>}
        </div>
      </div>
    </>
  )
}

export default ContentLatestNews
