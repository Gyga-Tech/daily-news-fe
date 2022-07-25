import { Link } from "react-router-dom";
import "./index.css"

const Navbar = () => {

    return(
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid d-flex justify-content-around px-5">
            <Link to="/" className="navbar-brand font-xl bold " href="#">Daily- News</Link >
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-5">
                        <Link to="/" className="nav-link active " aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link to="/articles" className="nav-link " href="#">Articles</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link to="/category" className="nav-link ">Category</Link>
                    </li>
                </ul>

                  <form className="d-flex" role="search">
                     <Link to="/authentication/signup" className="nav-link mx-2 mt-2">Sign Up</Link>
                     <Link to="/authentication/signin" ><button className="btn btn-primary mx-3 " type="submit" style={{width: "100%"}}>Sign In</button></Link>
                     
                </form>

            </div>
        </div>
    </nav>
  );
};

    
    

export default Navbar