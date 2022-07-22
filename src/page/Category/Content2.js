
const Content2 = () => {


    return(<>
        <div className="col-md-4">
            <div className="image-category">
                <img  width="369px" alt="category"/>
            </div>
            <div className="p-3 border-bottom ">
                <h3 className="font-xl bold text-center">Country</h3>
            </div>

            <div className="p-3  border-bottom">
                <h3 className="font-m bold">Description:</h3>
                <p>All articles in Country are mostly explaining facts about
                 countries and teir condition. See update form category so 
                 you won’t miss a thing!</p>
            </div>
            <div className="p-3 mb-3">
                <p className="font-s mb-1"><span className="bold">Total Articles: </span> 112 Articles</p>
                <p className="font-s mb-1"><span className="bold">Date Created: </span> jan 12th 2020</p>
            </div>
            <div className="d-flex justify-content-center my-3">
            <button className="btn btn-primary btn-explore font-m bold">Explore Category</button>
            </div>
            
        </div>
    </>)
}

export default Content2