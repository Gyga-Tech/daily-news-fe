import Header from './Header'
import Content from './Content'
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