import "./index.css"
const Footer = () => {
    
    return(
        <footer className="container-fluid bg-primary">
           <div className="row mt-5 mx-5 p-5 justify-content-around">
                <div className="col-lg-3 comunity me-5">
                    <div className="container d-flex flex-column ">
                    <p className="font-s">Why News Today</p>
                    <p className="font-s">Be an author</p>
                    <p className="font-s">Community</p>
                    <p className="font-s">FAQ</p>
                    </div>
                </div>  
                <div className="col-lg-3 news-today me-5">
                    <div className="container d-flex flex-column  ">
                    <p className="font-m color-white">News Today</p>
                    <p className="font-s">Jendral Sudirman Street No. 23 Jakarta, Indonesia</p>
                    <p className="font-s">(621)989898934</p>
                    <p className="font-s">newstoday@mail.com</p>
                    </div>
                </div>  
            </div>
        </footer>
    )
}

export default Footer