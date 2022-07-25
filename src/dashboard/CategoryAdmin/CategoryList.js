import React from "react";
import { useDeleteCategoriesIdMutation, useGetCategoriesQuery } from "../../features/categories/categoriesSlice";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCategoriesIdQuery } from "../../features/categories/categoriesSlice";
import "./CategoryList.css"

const CategoryList = () => {

    const Loading = () => {
        return <div>Loading....</div>
    }
    const [searchParams, setSearchParams] = useSearchParams()
    const {
        data: categories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCategoriesQuery({})

    const {
        data: categoriesId,
        isLoading: pageLoading,
        isSuccess: pageSuccess,
        isError: pageIsError,
        error: pageError
    } = useGetCategoriesIdQuery(searchParams.get("categoriesId"))

    const [imgPreview, setimgPreview] = useState(null)
    const [errorImg, setErrorImg] = useState(false)
    // const formData = new FormData
    const [formAddData, setFormAddData] = useState({})
    // const [addArticle]= useAddArticleMutation({}) 
    const handleImageChange = (event) => {
        const selected = event.target.files[0]
        const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"]
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setimgPreview(reader.result)

            }
            reader.readAsDataURL(selected)

            // setFormAddData(prevData=>({...prevData, cover: selected}))
        } else {
            setErrorImg(true)
        }
    }

    const [
        deleteCategoriesId, {isLoading: deleteLoading, isSuccess: deleteSuccess, isError: deleteIsError, error: deleteError }
    ] = useDeleteCategoriesIdMutation()

    const handleDelete = ()=>{
        
        if (window.confirm("Are You Sure") == true) {
            deleteCategoriesId(searchParams.get("categoriesId"))
           if(deleteSuccess){
            alert("Category has been deleted")
           }if(deleteIsError){
            alert(deleteError.originalStatus)
           }     
        }
    }

    // const [dataCategory, setDataArticle] = useState({})

    // formData.append('categories_name', formAddData.categories_name)
    // formData.append('cover', formAddData.cover)

    // console.log(useA(), "INI ADD")
    // const handleAddNewArticle = (event)=> {
    //     event.preventDefault()
    //     addArticle(formData)
    //     if(isError){
    //         alert("error")
    //     }if(isSuccess){
    //         alert("Article has been added")  
    //     }

    // }

    return (<>

        <div class="container-fluid">
            <div class="row">
                <div class="col-8 mx-5 mt-5">
                    <div className="row d-flex flex-row justify-content-between">
                        <div className="sortby col-4">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle bi bi-funnel-fill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by
                                </button>
                                <ul className="dropdown-menu dropdown-menu-start">
                                    <li><a className="dropdown-item" >Name (A-Z) </a></li>
                                    <li><a className="dropdown-item" >Name (Z-A) </a></li>
                                    <li><a className="dropdown-item" >Category</a></li>
                                    <li><a className="dropdown-item" >Last Added</a></li>
                                    <li><a className="dropdown-item" >Last Modified</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="add-category col-4">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add New Category
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add New Category</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="d-flex flex-row">
                                                <div className="form-container d-flex flex-column mx-auto">
                                                    <div className="field-category-name" style={{ width: "100%", color: "#376AED4D" }}>
                                                        <input type="text" id="form3Example1" className="form-control" placeholder="Type Category Name" />
                                                    </div>
                                                    <div className="field-content d-flex flex-row mt-3">
                                                        <div className="left-side mx-2">
                                                            <div className="container">
                                                                {errorImg && alert("File Not Supported")}
                                                                <div className="imgPreview" style={{ background: imgPreview ? `url("${imgPreview}")no-repeat center/cover` : "#fff", cursor: "pointer" }}>
                                                                    {!imgPreview && (
                                                                        <>
                                                                            <label htmlFor="fileUpload" className="customFileUpload">Choose Cover Photo</label>

                                                                            <input type="file" id="fileUpload" onChange={handleImageChange} />
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="action-upload">
                                                                {imgPreview && <button className="btn btn-secondary btn-block" style={{ width: "250px" }} onClick={() => setimgPreview(null)}>Remove Cover</button>}

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="reset" value="Reset" className="btn btn-cancel" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show-category d-flex flex-row flex-wrap justify-content-between">
                        <div className="d-flex flex-row">
                            {isLoading ? (<Loading />) : categories?.data?.map((item, index) => {
                                return (
                                    <div className="card-category-list mx-2 mt-3" key={index} onClick={() => setSearchParams({ categoriesId: item.categories_id })} style={{ width: "160px", height: "215px", borderRadius: "10px" }}>
                                        <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt={item.categories_name} title={item.title} style={{ width: "160px", height: "215px", borderRadius: "10px" }} />
                                        <p className="mt-2 text-center">{item.categories_name}</p>
                                    </div>
                                )
                            })}
                            {isError && (<h1>Error</h1>)}
                        </div>
                    </div>
                </div>
                <div class="col-3 mt-5">
                    <div className="container mb-5">
                        <div className="row">
                            {categoriesId?.data?.map((item, index) => {
                                return (<>
                                    <div className="card-cover-category d-flex justify-content-center" style={{ minWidth:"100%"}}>
                                        <img src={`https://gyga-news.herokuapp.com/public/${item.cover}`} alt="{item.categories_name}" />
                                    </div>
                                    <p className="d-flex justify-content-center">{item.categories_name}</p>
                                </>)})}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <button className="btn btn-danger" onClick={handleDelete}>Delete Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>)
}

export default CategoryList