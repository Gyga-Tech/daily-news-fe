import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

function AlreadySignIn() {
    const {role} = useSelector((state) => state.auth)
    const location = useLocation()
    return (
        role ? role === "admin" ?
        <Navigate to="/dashboard"/> : 
        <Navigate to="/"/> 
        : <Outlet /> 
        )
}

export default AlreadySignIn