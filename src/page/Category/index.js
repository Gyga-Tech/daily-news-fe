import Content from "./Content"
import Content2 from "./Content2"
import Header from "./Header"
import "./index.css"

const Category = () => {
    
    return (<>
        <Header />
        <main className="px-5">
            <div className="row">
                <Content />
                {/* <Content2 /> */}
            </div>
           
        </main>
        
    </>
       
    )
}

export default Category