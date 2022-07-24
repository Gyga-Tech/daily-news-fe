import bg from "../../assets/img/forgot.jpg"
import Footer from "../../component/Footer"


const Forgot = () => {

    return(
        <>
          
        <div className="container-fluid row  " style={{height:"100vh"}}>
            <div className="col content-leaft d-flex flex-row p-0"style={{height: "100vh", overflow: "hidden"}}>
              
                    <img className="img-fluid" style={{width:"100%"}} src={bg} alt="bg" />
            </div>
            <div className="col content-right  p-0 m-0" style={{ maxHeight : "100%"}}>
                 
                 <div className="container-forgot d-flex flex-column justify-content-center align-items-center px-5 "style={{overflow:"auto",height:"60%"}} >
                 <div className="row container-fluid">               
                <h3 className="font-l color-black m-5 ">Back</h3>
                          
                <h3 className="font-xl">DON’T WORRY</h3>
                <p className="for font-s color-gray ">We are here to help you to recover your password. Enter your email adress that you used to register and we’ll give you instructions to reset your password.</p>
                
            </div>
            <div className="mb-3">
                <input type="email" className="form-control imput " id="Email address" placeholder="Enter your email adress"/>
            </div>          
            <button className="btn btn-primary btn-lg mb-5 btn-login">Send Link</button>
            <button className="btn btn-primary btn-lg mb-5 btn-login">Resend link</button>  
                        
            </div>
            <div style={{height:"40%" ,overflow:"hidden"}}><Footer/> </div>
                   
    </div>

        </div>
        </>
    )
}

export default Forgot