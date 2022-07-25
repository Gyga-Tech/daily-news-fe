import Header from './Header'
import Content from './Content'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'


const Articles = () => {
    return(<>
    
    <Navbar/>
<div className='articles'>
    <Header />
    <Content />
</div>
    <Footer/> 
    </>
    )
}

export default Articles