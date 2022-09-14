import React from 'react'
// import background from "../../img/"
// import bg from '../../assets/img/man.jpg'
import './Headers.css'

const Headers = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="section-headers">
            <div className="title-headers">
              <h1
                style={{
                  fontFamily: 'Georgia',
                  color: '#0D253C',
                  fontWeight: '700',
                }}
              >
                Share Information <br /> and Educate People
              </h1>
            </div>
            <div className="content-headers">
              <p style={{ fontFamily: 'Lato', color: '#0D253C' }}>
                Everyone has their point of view of something, but just <br />
                don't be afraid to express the facts. Be an author and <br />
                share you prespective of something to the world.
              </p>
            </div>
            <div className="explore mx-5 mt-3">
              <button className="btn btn-primary">Start Exploring</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headers
