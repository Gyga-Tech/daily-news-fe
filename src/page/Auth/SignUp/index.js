import './index.css'
import facebook from '../../../assets/img/Facebook.svg'
import google from '../../../assets/img/Google.svg'
import twitter from '../../../assets/img/Twitter.svg'
import { useRegisterMutation } from '../../../features/auth/authApiSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [
    addRegister,
    { isLoading, isError, isSuccess, error },
  ] = useRegisterMutation()
  const [formRegister, setFormRegister] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  })
  const [errMsg, setErrMsg] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      await addRegister(formRegister).unwrap()
      setErrMsg('')
      navigate('/authentication/signin', { replace: true })
    } catch (err) {
      if (err.status === 400) {
        setErrMsg('maaf email sudah ada')
      }
    }
  }

  return (
    <>
      <div className="col-md-6 p-0">
        <div className="container-signup d-flex flex-column justify-content-center mx-3 m p-5">
          <div className="mt-5">
            <h3 className="title bold">Sign Up</h3>
            <div className="color-gray">
              <p>
                Hey, welcome to News Today! Create an account to enjoy our{' '}
                <br /> full feautres!
              </p>
            </div>
          </div>
          <form onSubmit={handleSignup} encType="multipart/form-data">
            <div className="mb-3">
              <label for="Email address" className="form-label">
                Email address :
              </label>
              <input
                type={'email'}
                className="form-control py-2"
                id="Email address"
                placeholder="Enter your email adress"
                onChange={(event) =>
                  setFormRegister((prevData) => ({
                    ...prevData,
                    email: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="g2 mb-3">
              <label for="Password" className="form-label">
                Password:
              </label>
              <input
                type={'password'}
                className="form-control py-2"
                id="Password"
                placeholder="Enter your password"
                onChange={(event) =>
                  setFormRegister((prevData) => ({
                    ...prevData,
                    password: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="mb-3">
              <label for="Phone Number" className="form-label">
                Phone Number :
              </label>
              <input
                type={'phoneNumber'}
                className="form-control py-2"
                id="Phone Number"
                placeholder="Enter your phone number"
                onChange={(event) =>
                  setFormRegister((prevData) => ({
                    ...prevData,
                    phoneNumber: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="mb-3">
              <label for="Username" className="form-label">
                Username :
              </label>
              <input
                type={'userName'}
                className="form-control py-2"
                id="username"
                placeholder="Enter your username"
                onChange={(event) =>
                  setFormRegister((prevData) => ({
                    ...prevData,
                    username: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name :
              </label>
              <input
                type={'name'}
                className="form-control py-2"
                id="name"
                placeholder="Enter your username"
                onChange={(event) =>
                  setFormRegister((prevData) => ({
                    ...prevData,
                    name: event.target.value,
                  }))
                }
                required
              />
            </div>
            {errMsg && (
              <div className="font-m p-3 color-white mb-3 bold rounded-2 bg-danger">
                {errMsg}
              </div>
            )}
            <div className="submit">
              {isLoading ? (
                <button
                  className="btn btn-primary btn-lg mb-5 btn-login"
                  disabled={true}
                >
                  Loading..
                </button>
              ) : (
                <button
                  onClick={handleSignup}
                  className="btn btn-primary btn-lg mb-5 btn-login"
                >
                  Sign Up
                </button>
              )}
              {isError && <div>{error.message}</div>}
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

export default SignUp
