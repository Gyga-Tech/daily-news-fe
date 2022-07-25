import Footer from "../../component/Footer"
import Navbar from "../../component/Navbar"
import Section1 from "./Section1"
import Section2 from "./Section2"

const CatArticle = () => {

    return(
    <>
        <Navbar/>
        <main className="p-5" >
            <Section1/>
            <Section2/>
        </main>
        <Footer/>
    </>)
}

export default CatArticle