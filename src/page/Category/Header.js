
import headerAsset from "../../assets/img/header-section2.png"

const Header = () => {
    return (
        <header className="">
            <div className="" style={{backgroundImage: `url(${headerAsset})`, 
            backgroundRepeat: "no-repeat", filter: "blur(1px)",
            backgroundSize: "cover", WebkitFilter: "blur(1px)",
             }}  >
            <div style={{height: "80vh", background: "linear-gradient(80deg, rgba(222, 222, 222, 1) 0%, rgba(0, 0, 0, 0) 45%)",}}></div>
            </div>
            <div className="col-md-6 col-xl-4 ps-md-4 ps-xl-5 header-category" style={{position: "absolute", zIndex: "3",}}>
            <div className="d-flex flex-column justify-content-center p-3" style={{}}
             >
                <h1 className="font-sm-xxl font-xxl bold mb-5 text-center text-md-start">Choose Article by Category</h1>
                <p className="font-s bold text-center text-md-start">Category helps you to read another article that you haven’t
                 thought before. You able to read all articles for free. Enjoy the reading!</p>
            </div>
            </div>
            
        </header>
    )
}

export default  Header