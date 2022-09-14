import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetArticleQuery } from '../../features/article/articleSlice'
import moment from 'moment'
import parse from 'html-react-parser'
import Slider from 'react-slick'
import './Content.css'

const Loading = () => {
  return <div>Loading....</div>
}

const Content = () => {
  const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticleQuery({})

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const config2 = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        },
      },
    ],
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="popular-tags mt-5">
            <div className="field-popular-tag">
              <h6>Popular Tags</h6>
            </div>
            <div className="btn-tag d-flex flex-row justify-content-between mt-2">
              <button className="btn btn-light text-primary">#ladygaga</button>
              <button className="btn btn-light text-primary">
                #jokowidodo
              </button>
              <button className="btn btn-light text-primary">#dayniki</button>
              <button className="btn btn-light text-primary">#ladygaga</button>
              <button className="btn btn-light text-primary">
                #jokowidodo
              </button>
              <button className="btn btn-light text-primary">#dayniki</button>
              <button className="btn btn-light text-primary">#ladygaga</button>
              <button className="btn btn-light text-primary">
                #jokowidodo
              </button>
              <button className="btn btn-light text-primary">#dayniki</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="category mt-5">
            <div className="field-category">
              <h6>Category</h6>
            </div>

            {/* <div className="field-cover d-flex flex-column justify-content-between">
              <div className="d-flex flex-row justify-content-between"> */}
            <Slider {...config2}>
              {isLoading ? (
                <Loading />
              ) : (
                article?.data?.results?.map((item, index) => {
                  return (
                    <>
                      <Link
                        to={`/category/article/${item.categories_id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="card-category-list mt-3" key={index}>
                          <img
                            src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
                            title={item.categories_name}
                          />
                          <p className="mt-2 text-center">
                            {item.categories_name}
                          </p>
                        </div>
                      </Link>
                    </>
                  )
                })
              )}

              {isError && <h1>Error</h1>}
            </Slider>
            {/* </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="recommended">
            <div className="field-recommended">
              <h6>Recommended</h6>
            </div>
            <Slider {...config}>
              {/* <div className="card-recommended"> */}
              {isLoading ? (
                <Loading />
              ) : (
                article?.data?.results?.map((item, index) => {
                  return (
                    <>
                      <Link
                        to={`/article/${item.article_id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div
                          className="card-recommended-list d-flex justify-content-between align-items-end mt-3 shadow-sm mb-5 bg-white rounded"
                          style={{ width: '350px' }}
                        >
                          <div className="cover" key={index}>
                            <img
                              src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
                              style={{ width: '126px', height: '202px' }}
                            ></img>
                          </div>
                          <div className="content-recommended">
                            <div className="content-title text-primary">
                              <h6>{item.title.slice(0, 20)}</h6>
                              <p>{parse(`${item.content.slice(0, 50)}`)}</p>
                            </div>
                            {/* <div className="content-fill">
                            </div> */}
                            <div
                              className="properties"
                              style={{ fontSize: '0.9rem' }}
                            >
                              <div className="like d-flex flex-row">
                                <i className="bi bi-hand-thumbs-up mx-1"></i>
                                <p>2.1k</p>
                              </div>
                              <div className="time d-flex flex-row">
                                <i className="bi bi-clock mx-1"></i>
                                <p>
                                  {moment(`${item?.created_at}`)
                                    .startOf('minutes')
                                    .fromNow()}
                                </p>
                              </div>
                              <div className="tagged">
                                <i className="bi bi-tag mx-1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  )
                })
              )}
              {isError && <h1>Error</h1>}
              {/* </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
