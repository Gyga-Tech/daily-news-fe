import './index.css'
import facebook from '../../../assets/img/Facebook.svg'
import google from '../../../assets/img/Google.svg'
import twitter from '../../../assets/img/Twitter.svg'
import { useEffect, useRef, useState } from 'react'
import { useSigninMutation } from '../../../features/auth/authApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../../../features/auth/authSlice'

const SignIn = () => {
  const [email, setEmail] = useState()
  const [pwd, setPwd] = useState()
  const [errMsg, setErrMsg] = useState()
  const userRef = useRef()
  const navigate = useNavigate()
  const { role } = useSelector((state) => state.auth)

  const [signin, { isLoading, isError }] = useSigninMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await signin({ email: email, password: pwd }).unwrap()
      console.log(result, 'hello')
      dispatch(setCredentials(result.data))
      setEmail('')
      setPwd('')
    } catch (err) {
      if (err.status === 400) {
        setErrMsg('email/password is wrong')
      } else if (err.status === 401) {
        setErrMsg('unauthorized')
      } else {
        setErrMsg('sign in failed')
      }
    }
  }

  return (
    <>
      <div className="col-md-6 p-0">
        <div className="container-signup d-flex flex-column justify-content-center mx-3 p-5 ">
          <div>
            <h3 className="bold">Login</h3>
            <p className="color-gray ">Hey, welcome back to News Today!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="Email address" className="form-label">
                Email address :
              </label>
              <input
                type="email"
                className="form-control py-2"
                ref={userRef}
                value={email}
                id="Email address"
                placeholder="Enter your email adress"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="Password" className="form-label">
                Password :
              </label>
              <input
                type="Password"
                className="form-control py-2"
                id="Password"
                placeholder="Enter your password"
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>

            {errMsg && <div
                style={{backgroundColor: '#faf172'}} 
                className=' text-center p-2 mb-3 rounded-3'
            >{errMsg}</div>}
            
            <div className="btn1">
              <button
                className="btn btn-primary btn-lg mb-5 btn-login"
                type='submit'
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="font-s bold align-self-center">Or sign up with</p>

          <div className="lg align-self-center gap-3">
            <img src={google} style={{ width: '35px' }} alt="google" />
            <div>
              <img src={facebook} style={{ width: '35px' }} alt="facebook" />
            </div>
            <img src={twitter} style={{ width: '35px' }} alt="twitter" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
