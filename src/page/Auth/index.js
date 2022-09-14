import './index.css'
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const route = useRoutes()

  return (
    <div className="container-fluid m-0">
      <div className="row ">
        <div className="col-6 bg-primary d-none d-md-block">
          <div className="container-auth d-flex flex-column justify-content-between ">
            <div>
              <Link
                to="/"
                className="d-flex align-items-center fw-semibold color-white ms-5 mt-2 link-home"
              >
                <IoIosArrowBack size={25} style={{ color: '#fff' }} />
                Home Page
              </Link>
            </div>
            <div className="d-flex flex-column  align-items-center p-5">
              <h1 className="color-white bold">
                News <br /> Today
              </h1>
              <p className="color-white mb-5">newstoday@mail.com</p>
              <div className="d-flex mt-5 align-items-center mb-5 ">
                <div className="garis me-3"></div>
                <p className="p1">Already have an account?</p>
                <div className="garis ms-3"></div>
              </div>
              <button
                className="btn btn-secondary py-3 rounded-2 shadow bold button-action"
                onClick={() =>
                  location.pathname === '/authentication/signup'
                    ? navigate('/authentication/signin')
                    : navigate('/authentication/signup')
                }
              >
                {location.pathname === '/authentication/signin'
                  ? 'Sign Up'
                  : 'Sign In'}{' '}
                Here
              </button>
            </div>
            <div className="row mb-5 color-white justify-content-between mx-5 px-5">
              <div className="col-3">
                <div className="c1">
                  <p>Why_NewsToday </p>
                  <p>Community</p>
                </div>
              </div>
              <div className="col-3">
                <div className="c2">
                  <p>Be an author</p>
                  <p>FAQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Auth
