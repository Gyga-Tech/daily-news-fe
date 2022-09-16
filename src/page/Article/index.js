import Footer from "../../component/Footer"
import Navbar from "../../component/Navbar"
import Comment from "./Comment"
import Content from "./Content"
import Header from "./Header"

const Article = () => {
    return(<>
        <Navbar />
        <main className="container-fluid px-sm-5">
            <Header/>
            <Content/>
            <Comment />
        </main>
        <Footer />
    </>)
}

export default Article