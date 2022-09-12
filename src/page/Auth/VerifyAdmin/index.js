import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"


function VerifyAdmin() {
    const {role} = useSelector((state) => state.auth)
    const location = useLocation()
    
    return (
         role ? role === 'admin' ?  
        <Outlet /> : 
        <Navigate to="/" state={{from: location}} replace/> :
        <Navigate to="/authentication/signin" state={{from: location}} replace/>
        )
    // return content
}

export default VerifyAdmin