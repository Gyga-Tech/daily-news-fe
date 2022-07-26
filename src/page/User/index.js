import ProfilePage from "./ProfilePage"
import SidebarProfile from "./SidebarProfile"

const User = () => {
    return (
        <>
            <div className='userprofile container'>
                <div className="row d-flex">
                    <div className="col-md-4"><SidebarProfile /></div>
                    <div className="col-md-8"><ProfilePage /></div>
                </div>
                
                
            </div>
        </>
    )
}

export default User