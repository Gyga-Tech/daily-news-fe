import "./index.css"
import facebook from "../../../assets/img/Facebook.svg"
import google from "../../../assets/img/Google.svg"
import twitter from "../../../assets/img/Twitter.svg"



const SignIn = ()=>{
return(
    <>
    <div className="col-6 px-5" >
        <div className="container-signup d-flex flex-column justify-content-center align-items-center p-5">
            <div className="sign m-5">
            <h3 className="font-xl">Sign In</h3>
            <p className="font-s color-gray ">Hey, welcome back to News Today!</p>
            </div>
                   
                        <div className="mb-3">
                            <label for="Email address" className="form-label">Email address :</label>
                            <input type="email" className="form-control imput " id="Email address" placeholder="Enter your email adress"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label for="Password" className="form-label">Password :</label>
                            <input type="Password" className="form-control imput" id="Password" placeholder="Enter your password"/>
                        </div>
                        <div className="btn1">
                        <button className="btn btn-primary btn-lg mb-5 btn-login">Sign Up</button>
                    </div>
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