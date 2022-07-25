import Header from './HeaderArticles'
import Content from './ContentArticles'
import Navbar from '../../component/Navbar'


const Articles = () => {
    return(
        <>
        <Navbar />
        <div className='articles'>
            <Header />
            <Content /> 
        </div>
        </>
        
    )
}

export default Articles