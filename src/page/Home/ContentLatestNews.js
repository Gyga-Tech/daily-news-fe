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
                    className="card-latest-news-list d-flex flex-row shadow-lg mb-5 bg-white rounded"
                    style={{ width: '100%', height: '202px' }}
                  >
                    <div className="cover col-2" key={index}>
                      <img
                        src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
                        alt="covid"
                        title="covid"
                        style={{ width: '126px', height: '202px' }}
                      ></img>
                    </div>
                    <div className="content col-8 d-flex flex-column mx-3">
                      <div className="content-title text-primary mt-3">
                        <h6>{item.title.slice(0, 100)}</h6>
                      </div>
                      <div className="content-fill">
                        <p style={{ width: '100%' }}>
                          {parse(`${item.content.slice(0, 150)}`)}
                        </p>
                      </div>
                      <div className="properties d-flex flex-row">
                        <div className="like d-flex flex-row">
                          <i class="bi bi-hand-thumbs-up mx-2"></i>
                          <p className="mx-2">2.1k</p>
                        </div>
                        <div className="time d-flex flex-row mx-2">
                          <i className="bi bi-clock"></i>
                          <p className="mx-2">
                            {moment(`${item?.created_at}`)
                              .startOf('minutes')
                              .fromNow()}
                          </p>
                        </div>
                        <div className="tagged d-flex flex-row mx-2">
                          <i className="bi bi-tag"></i>
                        </div>
                      </div>
                    </div>
                    <div className="read-now col-2 d-flex flex-row">
                      <Link
                        to={`/article/${item.article_id}`}
                        style={{
                          textDecoration: 'none',
                          color: '#0D253C',
                          marginTop: '5rem',
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
