import pp from '../../assets/img/profileDefault.jpg'
const Comment = () => {
  return (
    <section className="container-fulid comment-wrap">
      <h3 className="font-l mb-3 ">Comment</h3>
      <div className=" mb-3 comment">
        <div className="profile-container me-3">
          <img
            className="rounded"
            src={pp}
            width="55px"
            alt="profile-pitcure"
          />
        </div>
        <form className="col-8">
          <div className=" ">
            <p className="font-s bold mb-1">John Doe</p>
            <textarea
              class="form-control mb-3"
              id="comment"
              placeholder="leave your comment here"
              rows="3"
            ></textarea>
            <button className="btn btn-primary rounded-2">Submit</button>
          </div>
        </form>
      </div>
      <div className="d-flex mb-3">
        <div className="profile-container me-3">
          <img
            className="rounded"
            src={pp}
            width="55px"
            alt="profile-pitcure"
          />
        </div>

        <div className="d-flex flex-column">
          <p className="font-s bold mb-1">John Doe</p>
          <p className="font-s ">This is Comment</p>
        </div>
      </div>
    </section>
  )
}

export default Comment
