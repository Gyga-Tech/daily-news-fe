import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notif from "../../assets/img/Notif.svg"
import human from "../../assets/img/human.svg"
import "./index.css"

const Navbar = () => {
   const {userId} = useSelector((state) => state.auth)
   console.log(userId)

    return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-around px-5">
            <Link to="/" className="navbar-brand font-xl bold " href="#">Daily-News</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item m-3">
                        <Link to="/" className="nav-link active font-m" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to="/articles" className="nav-link font-m" href="#">Articles</Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to="/category" className="nav-link font-m">Category</Link>
                    </li>
                </ul>
                {
                  userId ?  (<><form className="d-flex" role="search">
                  <input  className="form-control me-2" type="search" placeholder="Search" aria-label= " Search"/>
                  {/* <button class="btn btn-outline-success" type="submit">Search</button> */}

                </form>
                <div className="h">
                <img src={notif} alt="notif" />
                </div>
                  
                <Link to="/users"><img src={human} alt="human" /></Link>  </>) : (<><Link to="/authentication/signup" className="nav-link m-3 font-m bold">Sign Up</Link>
                <Link to="/authentication/signin" ><button className="btn btn-primary m-3 font-m" type="submit">Sign In</button></Link></>)
                }
                 
                

            </div>
        </div>
    </nav>
  );
};


export default Navbar



