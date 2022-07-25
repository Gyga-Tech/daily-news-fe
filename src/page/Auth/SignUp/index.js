import "./index.css"
import facebook from "../../../assets/img/Facebook.svg"
import google from "../../../assets/img/Google.svg"
import twitter from "../../../assets/img/Twitter.svg"
import { useRegisterMutation } from "../../../features/auth/authApiSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SignUp = () => {

    const navigate = useNavigate()
    const [addRegister, { isLoading, isError, isSuccess, error }] = useRegisterMutation()
    const [formRegister, setFormRegister] = useState({
        userName:'', name:'', email:'', password:'', phoneNumber:'' 
      })
    
    const handleSignup = (event) => {
        event.preventDefault()
        addRegister(formRegister)
        if(isError){
            alert("email udah terdaftar bro")
        }
        alert("Register Successfully")
        navigate("/authentication/signin", {replace:true})

    }
    
    return (
        <>
            <div className="col px-5">
                <div className="container-signup d-flex flex-column justify-content-center align-items-center p-5">
                    <div className="m-5">
                        <h3 className="font-xl">Sign Up</h3>
                        <div className="font-s color-gray ">
                            <p >Hey, welcome to News Today! Create an account to enjoy our</p>
                            <p> full feautres!</p>
                        </div>
                    </div>
                    <form onSubmit={handleSignup} encType="multipart/form-data">

                        <div className="mb-3">
                            <label for="Email address" className="form-label">Email address :</label>
                            <input type={'email'} className="form-control imput " id="Email address" placeholder="Enter your email adress" onChange={(event) => setFormRegister((prevData) => ({
                                ...prevData,
                                email: event.target.value
                            }))} required />
                        </div>
                        <div className="g2 mb-3">
                            <label for="Password" className="form-label">Password:</label>
                            <input type={'password'} className="form-control imput" id="Password" placeholder="Enter your password" onChange={(event) => setFormRegister((prevData) => ({
                                ...prevData,
                                password: event.target.value
                            }))} required  />
                        </div>
                        <div className="mb-3">
                            <label for="Phone Number" className="form-label">Phone Number :</label>
                            <input type={'phoneNumber'} className="form-control imput" id="Phone Number" placeholder="Enter your phone number" onChange={(event) => setFormRegister((prevData) => ({
                                ...prevData,
                                phoneNumber: event.target.value
                            }))} required  />
                        </div>
                        <div className="mb-3">
                            <label for="Username" className="form-label">Username :</label>
                            <input type={'userName'} className="form-control imput" id="username" placeholder="Enter your username" onChange={(event) => setFormRegister((prevData) => ({
                                ...prevData,
                                userName: event.target.value
                            }))} required  />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name :</label>
                            <input type={'name'} className="form-control imput" id="name" placeholder="Enter your username" onChange={(event) => setFormRegister((prevData) => ({
                                ...prevData,
                                name: event.target.value
                            }))} required  />
                        </div>
                        
                        <div className="submit">
                        
                            {isLoading ? (
                                <button className="btn btn-primary btn-lg mb-5 btn-login" disabled={true}>Loading..</button>
                            ) : (
                                <button onClick={handleSignup} className="btn btn-primary btn-lg mb-5 btn-login" >Sign Up</button>
                            )}
                            {isError && (
                                <div>{error.message}</div>
                            )}
                        </div>
                        <p className="font-s bold">Or sign up with</p>
                        <div className="lp">
                            <img src={google} alt="google" />
                            <div className="lp1">
                                <img src={facebook} alt="facebook" />
                            </div>
                            <img src={twitter} alt="twitter" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp