import React from "react";
import { useState } from "react";
import { useAddCategoriesMutation, useDeleteCategoriesIdMutation, useUpdateCategoriesMutation, useGetCategoriesQuery } from "../features/categories/categoriesSlice";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css"

const Loading = () => {
    return <div>Loading....</div>
}

const Dashboard = () => {
    const [query, setQuery] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [coverPrev, setCoverPrev] = useState(null)
    const [errorImg, setErrorImg] = useState(false)

    const formData = new FormData
    const { userId } = useSelector(state => state.auth)
    const [refetch, setRefetch] = useState()
    const [formAddData, setFormAddData] = useState({
        userID: userId
    })
    const [addCategories, { addIsLoading, addIsError, addIsSuccess }] = useAddCategoriesMutation({})

    const {
        data: categories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCategoriesQuery({})

    const handleImageChange = (event) => {
        const selected = event.target.files[0]
        const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"]
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setCoverPrev(reader.result)
            }
            reader.readAsDataURL(selected)
            setFormAddData(prevData => ({ ...prevData, cover: selected }))
        } else {
            setErrorImg(true)
        }
    }

    formData.append('userID', formAddData.userID)
    formData.append('categories_name', formAddData.categories_name)
    formData.append('cover', formAddData.cover)

    const handleAddNewCategories = (event) => {
        event.preventDefault(event)
        addCategories(formData)
        setRefetch(refetch)
        if (addIsError) {
            alert("error")
        } if (addIsSuccess) {
            alert("Category has been added")
        }
    }

    const [
        deleteCategoriesId, { isLoading: deleteLoading, isSuccess: deleteSuccess, isError: deleteIsError, error: deleteError }
    ] = useDeleteCategoriesIdMutation()

    const handleDelete = (e) => {
        if (window.confirm("Are You Sure") == true) {
            deleteCategoriesId(e)
            if (deleteSuccess) {
                alert("Category has been deleted")
            } if (deleteIsError) {
                alert(deleteError.originalStatus)
            }
        }
    }

    return (<>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control" placeholder="type here" aria-label="Search" aria-describedby="basic-addon1" onChange={event => setQuery(event.target.value)} />
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <button type="button" className="btn btn-success bi bi-plus rounded" data-bs-toggle="modal" data-bs-target="#addCategory">Add Category</button>
                </div>
            </div>
            {/* Modal Add Category */}
            <div className="modal fade" id="addCategory" tabIndex="-1" aria-labelledby="addCategory" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCategory">Add New Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="d-flex flex-column" onSubmit={handleAddNewCategories} encType="multipart/form-data">
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                                    <input type={'categories_name'} className="form-control" id="categoryName" placeholder="type here" onChange={(event) => setFormAddData((prevData) => ({
                                        ...prevData, categories_name: event.target.value
                                    }))} />
                                </div>
                                <div className="mb-3">
                                    {errorImg && alert("File Not Supported")}
                                    <div className="coverPrev" style={{ background: coverPrev ? `url("${coverPrev}")no-repeat center/cover` : "#fff" }}>
                                        {!coverPrev && (
                                            <>
                                                <label htmlFor="fileUpload" className="customFileUpload">Choose Cover Photo</label>

                                                <input type="file" id="fileUpload" onChange={handleImageChange} />
                                            </>
                                        )}
                                    </div>
                                    <div className="action-upload">
                                        {coverPrev && <button className="btn btn-secondary btn-block" style={{ width: "170px" }} onClick={() => setCoverPrev(null)}>Remove Cover</button>}
                                        {/* <button type="reset" value="Reset" className="btn btn-secondary btn-block" style={{ width: "250px" }}>Change Cover</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" value="Reset" className="btn btn-secondary rounded" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary rounded" onClick={handleAddNewCategories}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end Modal */}
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Cover</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {isLoading ? (<Loading />) : categories?.data?.filter(item => {
                    if (query === '') {
                        return categories.data
                    } else if (item.categories_name.toLowerCase().includes(query.toLowerCase())) {
                        return categories.data
                    }
                }).map((item, index) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td scope="row">{item.categories_id}</td>
                                    <td>{item.categories_name}</td>
                                    <td>{item.cover}</td>
                                    <td className="d-flex justify-content-evenly">
                                        <button type="button" className="btn btn-sm btn-primary bi bi-pencil rounded text-center" title="edit category" onClick={handleDelete} />
                                        <button type="button" className="btn btn-sm btn-danger bi bi-trash rounded text-center" title="delete category" value={item.categories_id} onClick={(e) => handleDelete(e.target.value)} />
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
                }
            </table>
            <br />
            <br />
        </div>
    </>)
}

export default Dashboard