import React from "react";
import './UserProfile.css'
import ibel from '../../assets/img/IrishBella.jpeg'

const SidebarProfile = () => {
    return (
        <div>
            <div className="sidebar-wrap">
                <div className="sidebar-card">
                    <div className="image-profile2">
                        <img src={ibel} alt="ibellabel" />
                    </div>
                        <div className="card-body sidebar-card-body">
                            <h5>About me</h5>
                            <p>Madison Blackstone is a director of publisher, with experience managing global teams.</p>
                        </div>
                </div>
                    <div className="btn-group button-profiles" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                    <div className="button-action-profile">
                        <button type="button" class="btn btn-light">Edit Profile <i class="bi bi-chevron-right"></i></button><br />
                        <button type="button" class="btn btn-light">Save Post <i class="bi bi-chevron-right"></i></button><br />
                        <button type="button" class="btn btn-light">FAQ <i class="bi bi-chevron-right"></i></button><br />
                        <button type="button" class="btn btn-light">Help <i class="bi bi-chevron-right"></i></button><br />
                    </div>
                    <button type="button" class="btn btn-dark this-logout-btn">Logout</button>
                
            </div>

        </div>

    )
}

export default SidebarProfile