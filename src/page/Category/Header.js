import { height } from "@mui/system"
import headerAsset from "../../assets/img/header-section2.png"

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row" style={{backgroundImage: `url(${headerAsset})`, 
            backgroundRepeat: "no-repeat", filter: "blur(1px)",
            backgroundSize: "cover", WebkitFilter: "blur(1px)",
            height: "100%"
             }}  >
            <div style={{height: "80vh", background: "linear-gradient(80deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 45%)",}}></div>
            <div className="col-6" style={{position: "absolute", zIndex: "3", top: "40%" }}>
            <div className="d-flex flex-column justify-content-center m-3" style={{}}
             >
                <h1 className="font-xxl mb-3">Choose Article by Category</h1>
                <p className="font-m">Category helps you to read another article that you haven’t
                 thought before. You able to read all articles for free. Enjoy the reading!</p>
            </div>
            </div>
            </div>
        </header>
    )
}

export default  Header