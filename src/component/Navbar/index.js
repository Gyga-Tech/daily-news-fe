import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import notif from "../../assets/img/Notif.svg"
// import human from "../../assets/img/human.svg"
import { logout } from "../../features/auth/authSlice";
import "./index.css"
import profile from '../../assets/img/profileDefault.jpg'
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
const Navbar = () => {
  const dispatch = useDispatch()
  const { userId, role } = useSelector((state) => state.auth)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = useState()
  console.log(userId)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    // setSearchParams({title: search})
    search ?
    navigate(`/search?title=${search}`) :
    navigate(`/search?title=`)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top shadow">
      <div className="container-fluid d-flex justify-content-around px-2 px-md-5">
        <Link to="/" className="navbar-brand font-xl bold " href="#">Daily-News</Link>
        <button 
          className="navbar-toggler" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex='-1' id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header mx-3">
          <Link to="/" className="navbar-brand font-xl bold " href="#">Daily-News</Link>          
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div> 
          <div className="offcanvas-body">
          <ul className="navbar-nav me-md-auto mb-2 mb-lg-0">
            <li className="nav-item mx-md-3 my-3 mx-auto">
              <Link 
              to="/" 
              className={`nav-link font-m ${pathname === '/' && 'active bold'}`} 
              aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item mx-md-3 my-3 mx-auto">
              <Link 
                to="/articles" 
                className={`nav-link font-m ${pathname === '/articles' && 'active bold'}`} 
                href="#">Articles</Link>
            </li>
            <li className="nav-item mx-md-3 my-3 mx-auto">
              <Link 
                to="/category" 
                className={`nav-link font-m ${pathname === '/category' && 'active bold'}`} 
                >Category</Link>
            </li>
            { 
              role === 'admin' &&
              <li className="nav-item mx-md-3 my-3 mx-auto">
                <Link 
                  to="/dashboard" 
                  className={`nav-link font-m ${pathname === '/dashboard' && 'active bold'}`} 
                >Dashboard</Link>
              </li> 
            }
          </ul>
          {
            userId ? (<div className="d-flex align-items-center">
            <form className="d-flex" onSubmit={handleSubmit} role="search">
              <input className="form-control  me-3 " type="search" placeholder="Search" aria-label=" Search" 
                // onSubmit={handleSubmit}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
              <div className="h bi bi-bell me-3">
                {/* <img src="" alt="notif" /> */}
              </div>
              
              <div class="dropdown">
                <div class="d-flex justify-content-center rounded-circle overflow-hidden me-3" 
                type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <img 
                    src={profile}
                    style={{width: '40px'}}
                  />
                </div>
                <ul class="dropdown-menu mt-2" style={{marginLeft: '-80px'}}>
                  <li><a class="dropdown-item"  onClick={() => dispatch(logout()) }>Logout</a></li>
                </ul>
              </div>
              {/* <button className="btn btn-danger bi bi-box-arrow-in-right rounded" onClick={() => {
                dispatch(logout())
              }}>Logout</button>  */}
              </div>) : 
              (
                <><Link to="/authentication/signup" className="nav-link m-3 font-m bold ">Sign Up</Link>
                <Link to="/authentication/signin" ><button className="btn btn-primary m-3 font-m" type="submit">Sign In</button></Link></>
            )
          }
          </div>
          



        </div>
      </div>
    </nav>
  );
};

/* <Link to="/users"><img src="" alt="human" /></Link>  </>)  */

export default Navbar



