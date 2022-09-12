import "./index.css"
import {Link, Outlet, useLocation, useNavigate, useRoutes} from "react-router-dom"

const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // const route = useRoutes()


    return(
        <div className="container-fluid">
            <div className="row ">
                    <div className="col-6">             
                        <div className="container-auth bg-primary d-flex flex-column justify-content-between px-5 py-3 ">
                             <div>
                                <Link to="/" className="font-l color-white m-5">Home Page</Link>
                            </div>
                                    <div className="d-flex flex-column  align-items-center p-5">
                                        <h1 className="font-xxl color-white mt-5">News Today</h1>
                                        <p className="font-l color-white mb-5">newstoday@mail.com</p>
                                        <div className="d-flex mt-5 align-items-center mb-5 ">
                                            <div className="garis me-3"></div>
                                                <p className="p1">Already have an account?</p>
                                            <div className="garis ms-3"></div>
                                        </div>                               
                                        <button 
                                        className="btn btn-secondary btn-lg mb-5 px-3 py-2 rounded-2 shadow bold"
                                        onClick={() => location.pathname === '/authentication/signup' ? 
                                        navigate('/authentication/signin') : navigate('/authentication/signup') }
                                        >{location.pathname === '/authentication/signin' ? 'Sign Up' : 'Sign In'} Here</button>                              
                                    </div>
                                    <div className=" row font-l color-white align-self-center">
                                        <div className="col ">
                                            <div className="c1">
                                            <p>Why_NewsToday </p>
                                            <p>Community</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="c2">
                                            <p>Be an author</p>
                                            <p>FAQ</p>
                                            </div>
                                           
                                        </div>
                            </div>                           
                        </div>                        
                    </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Auth