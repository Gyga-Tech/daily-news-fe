import React from 'react'
import { useState } from 'react'
import './ContentStory.css'

const ContentStory = () => {
  const [toggle, setToggle] = useState(false)
  const isOpen = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className="section-story px-2 px-md-5 py-5">
        <div className="d-flex flex-column ms-md-5 px-lg-5 py-lg-5" >
          <div className="">
            <h3 className='content-story-title bold text-center text-md-start mb-2'>
              Let's hear about <br /> Kayla's success story
            </h3>
          </div>
          <div className="tagline mb-4">
            <p className='text-center text-md-start'>
              See how well News Today works in a <br /> real user's life.
            </p>
          </div>
          <div className="started align-self-center align-self-md-start">
            <button className="btn btn-primary rounded-2">Let's Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentStory
