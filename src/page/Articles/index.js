import Navbar from '../../component/Navbar/index'
import Header from './HeaderArticles'
import Content from './ContentArticles'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'


const Articles = () => {
    return(<>
    
    <Navbar/>
<div className='articles'>
    <Header/>
    <Content />
</div>
    <Footer/> 
    </>
    )
}

export default Articles