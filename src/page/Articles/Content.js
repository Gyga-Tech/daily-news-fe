import Card from './Card'
const Content = () => {
    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='p-5'>
            <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div class="btn-group">
                <i class="bi bi-funnel"></i>
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Sort Here
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Category</a></li>
                        <li><a class="dropdown-item" href="#">Last Added</a></li>
                        <li><a class="dropdown-item" href="#">Last Modified</a></li>    
                    </ul>
            </div >
            <div className='row'>
                {array.map(()=><Card />)}
            </div>
        </div>
    )
}

export default Content