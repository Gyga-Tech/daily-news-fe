import Comment from "./Comment"
import Content from "./Content"
import Header from "./Header"

const Article = () => {
    return(<>
        <main className="container-fluid px-5">
            <Header/>
            <Content/>
            <Comment />
        </main>
    </>)
}

export default Article