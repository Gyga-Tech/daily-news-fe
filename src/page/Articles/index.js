import Header from './HeaderArticles'
import Content from './ContentArticles'


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