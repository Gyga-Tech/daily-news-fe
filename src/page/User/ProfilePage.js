import React from "react"
import './UserProfile.css'
import ibel from '../../assets/img/IrishBella.jpeg'

const ProfilePage = () => {
    return (
        <div>
            {/* <h4 className="profile-text">Profile</h4> */}
            <div className="card-profile1">
                <div className="upper-container">
                    <div className="image-container1">
                        <div className="img-profile1">
                            <img src={ibel} alt="ibellabel" />
                        </div>
                    </div>
                </div>
                <div className="pfuname">
                    <form className="form-input-profile">
                        <div className="data-user d-flex flex-row justify-content-around">
                            <div className="data-left">
                                <label htmlFor="funame">Username:</label><br />
                                <input type="text" id="funame" name="fname" placeholder="Username"/><br />

                                <label htmlFor="u-email">Email:</label><br />
                                <input type="text" id="u-email" name="u-email" placeholder="Email"/><br />

                                <label htmlFor="u-job">Job:</label><br />
                                <input type="text" id="u-job" name="u-job" /><br />

                                <label htmlFor="u-about">About:</label><br />
                                <textarea type="text" id="u-about" name="u-about" placeholder="About"/><br />
                            </div>
                            <div className="data-right">
                                <label htmlFor="profname">Name:</label><br />
                                <input type="text" id="lname" name="lname" /><br />

                                <label htmlFor="u-password">Password:</label><br />
                                <input type="password" id="u-password" name="u-password" /><br />

                                <div className="btn-submit">
                                    <input className="btn btn-primary sv-chnge" type="submit" value="Save Changes" />
                                    <input className="btn btn-primary req-author" type="submit" value="Request to be an Author" />
                                </div>

                                
                                
                            </div>

                                

                        </div>  
                    </form>
                </div>
            </div>
        </div>

    )

}
export default ProfilePage