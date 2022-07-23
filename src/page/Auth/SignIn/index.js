import "./index.css"
const SignIn = () => {
    return (
        <>
            <div className="col px-5">
                <div className="container-signup d-flex flex-column justify-content-center align-items-center p-5">
                    <div className="m-5">
                        <h3 className="font-xl">Sign In</h3>
                        <p className="font-s color-gray ">Hey, welcome back to News Today!</p>
                    </div>


                    <div className="mb-3">
                        <label for="Email address" className="form-label">Email address</label>
                        <input type="email" className="form-control input " id="Email address" placeholder="Enter your email adress" />
                    </div>
                    <div className="mb-3">
                        <label for="Password" className="form-label">Password:</label>
                        <input type="Password" className="form-control input" id="Password" placeholder="Enter your password" />
                    </div>

                    <button className="btn btn-primary btn-lg mb-5 btn-login">Sign Up</button>

                    <p className="font-s bold">Or sign up with</p>

                </div>

            </div>
        </>
    )
}

export default SignIn