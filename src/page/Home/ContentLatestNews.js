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
        <div className="title mt-5 mb-4">
          <h4 className='bold text-center text-sm-start'>Latest News</h4>
        </div>
        <div className="container-fluid">
          {isLoading ? (
            <Loading />
          ) : (
            article.data.results.slice(0, 3).map((item, index) => {
              return (
                <>
                  <div
                    className="row overflow-hidden shadow mb-5 rounded-3"
                    style={{
                      // width: '100%',
                      height: '250px',
                    }}
                  >
                    <div className="cover-home p-0 col-md-2" key={index}>
                      <img
                        src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="content-title text-primary bold " color=''>
                        <h3>{item.title}</h3>
                      </div>
                      <div className="content-fill">
                        <p style={{ width: '100%', height: '150px' }}>
                          {parse(`${item.content.slice(0, 300)}`)}
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
                    <div className="read-now-home col-md-2">
                      <Link
                        to={`/article/${item.article_id}`}
                        style={{
                          textDecoration: 'none',
                          color: '#0D253C',
                        }}
                      >
                        <button className="btn btn-primary rounded-2">Read now</button>
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
