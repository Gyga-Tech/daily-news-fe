import Card from './Card'
import './ContentArticles.css'

const Content = () => {
    const array = [1, 2, 3, 4]
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
                <div className="articles-class">
                    <h4>Trending</h4>
                    <h6 className="view-more">View More</h6>
                </div>
                <div className='row article-row'>
                    {array.map(()=><Card />)}
                </div>
                <div className="articles-class">
                    <h4>Economy</h4>
                    <h6 className="view-more">View More</h6>
                </div>
                <div className='row article-row'>
                    {array.map(()=><Card />)}
                </div>
                <div className="articles-class">
                    <h4>Politics</h4>
                    <h6 className="view-more">View More</h6>
                </div>
                <div className='row article-row'>
                    {array.map(()=><Card />)}
                </div>
            </div>
        </div>
    )
}

export default Content