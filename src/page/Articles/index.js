import Navbar from '../../component/Navbar/index'
import Header from './HeaderArticles'
import Content from './ContentArticles'
import Footer from '../../component/Footer/index'


const Articles = () => {
    return(
        <div className='articles'>
            <Navbar />
            <Header />
            <Content /> 
            <Footer />
        </div>
    )
}

export default Articles