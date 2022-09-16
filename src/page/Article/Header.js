import { useParams, useSearchParams } from 'react-router-dom'
import { useGetArticleIdQuery } from '../../features/article/articleSlice'
import asian1 from '../../assets/img/ASEAN1.png'
import './index.css'
import moment from 'moment'

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let params = useParams()
  const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticleIdQuery(params.articleId)

  let content
  if (isLoading) {
    content = <h1>Loading</h1>
  } else if (isSuccess) {
    console.log(article)
    // content = article.map((item) => <img src={item.url} alt="article" />)
    // content = <img src={article.url} width="595px" alt="article" />
    content = article?.data?.map((item, index) => (
      <Render key={item.article_id} item={item} />
    ))
  } else if (isError) {
    console.log(error)
    content = <h1>error</h1>
  }

  return content
}

const Render = (props) => {
  const { item } = props

  return (
    <>
      <div className="row my-4 my-md-5 mx-2 mx-md-4 nav-article ">
        <div className="col-2 back-chevron">
          <i class="bi bi-chevron-left fw-bold me-2 "></i>
          <h4 className="font-s bold ">Back</h4>
        </div>
        <div className="col-8 d-none d-sm-flex justify-content-center">
          <h3 className="font-l">Article View</h3>
        </div>
        <div className="col-2 share-article">
          <i class="bi bi-box-arrow-up-right"></i>
        </div>
      </div>
      <div className="row mx-4 justify-content-evenly align-items-center  content-article">
        <div className="col-lg-6 mb-4 mb-lg-1">
          <div className="thumbnail shadow rounded">
            <img
              className='img-fluids'
              // height='300'
              width='100%'
              src={`https://gyga-news.herokuapp.com/public/${item.cover}`}
              alt="article"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="container content-artcle">
          <div>
            <div className="d-flex  title-article">
              <h1 className='mb-4 text-center text-md-start'>{item.title}</h1>
            </div>
            <div className="d-flex flex-column bg-white">
              <p className="font-s mb-2">Richard Gervain - Author</p>
              <h4 className="font-xs mb-4">
                {moment(item.updated_at).format('MMMM DD YYYY')}
              </h4>
            </div>
          </div>
            <div className=''>
            <div className="d-flex info-article font-l mb-4">
              <i className="bi bi-hand-thumbs-up icon me-2"></i>
              <p className='me-4 mb-0'>2.1k</p>
              <i className="bi bi-bookmark-star icon "></i>
            </div>
            <div className="d-grid gap-2  mx-3 mb-3 ">
              <button className="btn btn-secondary py-md-3 btn-lg rounded-2">
                Share Article Link
              </button>
            </div>
            </div>
            
            {/* <button className="btn-edit">Edit Article</button>
                    <select className="select-edit">
                        <option selected>Add to category</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
