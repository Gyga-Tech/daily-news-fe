const Navbar = () => {

    return(
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex justify-content-around px-5">
        <a className="navbar-brand font-xl bold" href="#" style={{fontFamily:"georgia"}}>Daily News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-3">
              <a className="nav-link active font-m" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item m-3">
              <a className="nav-link font-m" href="#">Articles</a>
            </li>
            <li className="nav-item m-3">
              <a className="nav-link font-m">Category</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
         
              <a className="nav-link m-3 font-m bold">Sign Up</a>
           
            <button className="btn btn-primary m-3 font-m" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

    
    

export default Navbar