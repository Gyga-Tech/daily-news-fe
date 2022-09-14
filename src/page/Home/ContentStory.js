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
      <div className="section-story">
        <div className="card-left">
          <div className="title">
            <h3>
              Let's hear about <br /> Kayla's success story
            </h3>
          </div>
          <div className="tagline">
            <p>
              See how well News Today works in a <br /> real user's life.
            </p>
          </div>
          <div className="started">
            <button className="btn btn-primary">Let's Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentStory
