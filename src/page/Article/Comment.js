const Comment = () => {
    return(<section className="mx-5">
        <h3 className="font-l my-4">Comment</h3>
        <div className="row mb-3">
            <div className="col-3 profile-container me-3">
                <img width="55px" alt="profile-pitcure"/>
            </div>
            <form className="col-9">
            <div className=" ">
                 <p className="font-s bold mb-1">Name</p>
             <textarea class="form-control mb-3" id="comment" placeholder="leave your comment here" rows="3"></textarea>
             <button className="btn btn-primary">Submit</button>
            </div>
    
            </form>
        </div>
        <div className="d-flex mb-3">
            <div className="profile-container me-3">
                <img alt="profile-pitcure"/>
            </div>
        
            <div className="d-flex flex-column">
                 <p className="font-s bold mb-1">Name</p>
                 <p className="font-s ">This is Comment</p>
            </div>
        </div>
    </section>)
}

export default Comment