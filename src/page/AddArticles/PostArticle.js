import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuill } from 'react-quilljs';
import { useAddArticleMutation } from "../../features/article/articleSlice";
import { useSelector } from "react-redux";
import 'quill/dist/quill.snow.css';
import "./PostArticle.css"
import Auth from "../Auth";

const PostArticle = () => {
    const { quill, quillRef } = useQuill();
    const [coverPreview, setCoverPreview] = useState(null)
    const [errorImg, setErrorImg] = useState(false)
    const formData = new FormData
    const {userId} = useSelector(state=> state.auth)
    const [formAddData, setFormAddData] = useState({
        userID:userId
    })
    const [addArticle, { isLoading, isError, isSuccess }] = useAddArticleMutation({})
    const handleImageChange = (event) => {
        const selected = event.target.files[0]
        const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"]
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setCoverPreview(reader.result)

            }
            reader.readAsDataURL(selected)

            setFormAddData(prevData => ({ ...prevData, cover: selected }))
        } else {
            setErrorImg(true)
        }
    }

    // const [dataArticle, setDataArticle] = useState({})

    formData.append('userID', formAddData.userID)
    formData.append('cover', formAddData.cover)
    formData.append('categories_id', formAddData.categories_id)
    formData.append('title', formAddData.title)
    formData.append('content', formAddData.content)

    console.log(useAddArticleMutation(), "INI ADD")
    const handleAddNewArticle = (event) => {
        event.preventDefault()
        // let contentArticle = quill.getText()
        
        console.log(quill.getText())
        
        console.log(formData)
        addArticle(formData)

        if (isError) {
            alert("error")
        } if (isSuccess) {
            alert("Article has been added")
        }

    }

    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
              setFormAddData((prevData) => ({ ...prevData, content: quill.getText()}))
          });
        }
      }, [quill]);


    return (<>
        <div className="section-post-article d-flex flex-column">
            <div className="top-bar d-flex flex-row mb-5 mt-5">
                <div className="back-link">
                    <Link to="#" style={{ textDecoration: "none", color: "#0D253C" }}><i class="bi bi-caret-left-fill"></i> Back</Link>
                </div>
                <div className="title-page">
                    <h5>Write Article</h5>
                </div>
            </div>
            <div className="content">
                <form className="d-flex flex-row" onSubmit={handleAddNewArticle}>
                    <div className="form-container d-flex flex-column mx-auto">
                        <div className="field-content d-flex flex-row">
                            <div className="left-side mx-2">
                                <div className="container">
                                    {errorImg && alert("File Not Supported")}
                                    <div className="coverPreview" style={{ background: coverPreview ? `url("${coverPreview}")no-repeat center/cover` : "#fff" }}>
                                        {!coverPreview && (
                                            <>
                                                <label htmlFor="fileUpload" className="customFileUpload">Choose Cover Photo</label>

                                                <input type="file" id="fileUpload" onChange={handleImageChange} />
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="action-upload">
                                    {coverPreview && <button className="btn btn-secondary btn-block" style={{ width: "250px" }} onClick={() => setCoverPreview(null)}>Remove Cover</button>}
                                    {/* <button type="reset" value="Reset" className="btn btn-secondary btn-block" style={{ width: "250px" }}>Change Cover</button> */}
                                </div>
                            </div>
                            <div className="right-side d-flex flex-column mx-2">
                                <div className="card-top-field d-flex flex-row justify-content-between mb-4">
                                    <div className="title mx-2" style={{ width: "18rem", color: "#376AED4D" }}>
                                        <input type={'title'} id="form3Example1" className="form-control" placeholder="Article Title" onChange={(event) => setFormAddData((prevData) => ({
                                            ...prevData, title: event.target.value
                                        }))} />
                                    </div>
                                    <div className="category mx-2" style={{ width: "18rem", color: "#376AED4D" }}>
                                        <select className="form-select" aria-label="Default select example" onChange={(event) => setFormAddData((prevData) => ({
                                            ...prevData, categories_id: event.target.value
                                        }))}>

                                            <option selected="1">Economy</option>
                                            <option value="2">Politic</option>
                                            <option value="3">Country</option>
                                            <option value="4">Health</option>
                                            <option value="5">Beauty</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="attachment d-flex flex-row mb-1 mx-2">
                                    <div className="field">
                                        <h6>Attachment:</h6>
                                    </div>
                                </div>
                                <div className="text d-flex flex-row mb-4 justify-content-between mx-2">
                                    <div className="text-editor mb-4" style={{ width: 590, height: 200, borderRadius: '10px' }} >
                                        <div ref={quillRef} />
                                    </div>
                                </div>
                                <div className="action d-flex flex-row justify-content-between mx-2 mt-5">
                                    {isLoading ? <button type="submit" className="btn btn-primary btn-block" disabled style={{ width: "100%" }}>Request Publish Article</button>
                                        : <button type="submit" className="btn btn-primary btn-block" onClick={handleAddNewArticle} style={{ width: "100%" }}>Request Publish Article</button>}

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default PostArticle