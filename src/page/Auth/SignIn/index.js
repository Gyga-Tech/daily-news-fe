import "./index.css"
import facebook from "../../../assets/img/Facebook.svg"
import google from "../../../assets/img/Google.svg"
import twitter from "../../../assets/img/Twitter.svg"
import { useEffect, useRef, useState } from "react"
import { useSigninMutation } from "../../../features/auth/authApiSlice"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { setCredentials } from "../../../features/auth/authSlice"



const SignIn = ()=>{
    const  [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [errMsg, setErrMsg] = useState()
    const userRef = useRef()
    const navigate = useNavigate()
    const {role} = useSelector(state =>  state.auth)

    const [
        signin,
        {isLoading, isError}
    ] = useSigninMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef?.current?.focus()
    },[])

    if(role) {
        console.log(role)
        // role === "admin" ?
        // navigate("/dashboard", {replace: true} ) :
        // navigate("/", {replace: true} )

    }

    useEffect(()=> {
        setErrMsg("")
    },[email,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const result = await signin({email: email, password: pwd}).unwrap()
            console.log(result, "hello")
            dispatch(setCredentials(result.data))
            setEmail("")
            setPwd("")
            
        } catch(err) {
           if(err.status === 400) {
                setErrMsg("email/password is wrong")
                alert(errMsg)
            } else if (err.status === 401) {
                setErrMsg("unauthorized")
            } else {
                setErrMsg("sign in failed")
                alert(errMsg)
            }
        }
    }



return(
    <>
    <div className="col-6 px-5" >
        <div className="container-signup d-flex flex-column justify-content-center align-items-center p-5">
            <div className="sign m-5">
            <h3 className="font-xl">Sign In</h3>
            <p className="font-s color-gray ">Hey, welcome back to News Today!</p>
            </div>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="Email address" className="form-label">Email address :</label>
                            <input type="email" className="form-control imput "
                            ref={userRef} value={email} 
                             id="Email address" placeholder="Enter your email adress"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label for="Password" className="form-label">Password :</label>
                            <input type="Password" className="form-control imput" id="Password" placeholder="Enter your password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                        </div>
                        <div className="btn1">
                        <button className="btn btn-primary btn-lg mb-5 btn-login"
                         onClick={handleSubmit}>Sign In</button>
                        </div>
                        </form>

                      
                        
                        <p className="font-s bold">Or sign up with</p>
                         
                        <div className="lg">
                       <img src={google} alt="google" />
                       <div className="lg1">
                        <img src={facebook} alt="facebook" />
                       </div>                                    
                       <img src={twitter} alt="twitter" />
                        </div>
        </div>
    </div>
    </>
)
}

export default SignIn
