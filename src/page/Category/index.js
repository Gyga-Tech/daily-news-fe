import Footer from "../../component/Footer"
import Navbar from "../../component/Navbar"
import Content from "./Content"
import Content2 from "./Content2"
import Header from "./Header"
import "./index.css"

const Category = () => {
    
    return (<>
        <Navbar/>
        <Header />
        <main className="px-5">
            <div className="row">
                <Content />
                {/* <Content2 /> */}
            </div>
           
        </main>
        <Footer/>
    </>
       
    )
}

export default Category