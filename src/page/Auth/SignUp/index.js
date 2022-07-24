import "./index.css"
import facebook from "../../../assets/img/Facebook.svg"
import google from "../../../assets/img/Google.svg"
import twitter from "../../../assets/img/Twitter.svg"


const SignUp = ()=>{
return(
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
            <div className="mb-3">
                <label for="Email address" className="form-label">Email address :</label>
                <input type="email" className="form-control imput " id="Email address" placeholder="Enter your email adress"/>
            </div>
            <div className="g2 mb-3">
                <label for="Password" className="form-label">Password:</label>
                <input type="Password" className="form-control imput" id="Password" placeholder="Enter your password"/>
            </div>
            <div className="mb-3">
                <label for="Phone Number" className="form-label">Phone Number :</label>
                <input type="tel" className="form-control imput" id="Phone Number" placeholder="Enter your phone number"/>
            </div>
            <div className="b1">
            <button className="btn btn-primary btn-lg mb-5 btn-login">Sign Up</button>
            </div>
            
             <p className="font-s bold">Or sign up with</p>  
           
             <div className="lp">
                       <img src={google} alt="google" />
                       <div className="lp1">
                        <img src={facebook} alt="facebook" />
                       </div>                                    
                       <img src={twitter} alt="twitter" />
                        </div>
                        
                                
        </div>
       
    </div>
    </>
)
}

export default SignUp