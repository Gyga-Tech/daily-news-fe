import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

function AlreadySignIn() {
    const {userId} = useSelector((state) => state.auth)
    const location = useLocation()
    return (
        userId ? 
        <Navigate to="/"/> 
        : <Outlet /> 
        )
}

export default AlreadySignIn