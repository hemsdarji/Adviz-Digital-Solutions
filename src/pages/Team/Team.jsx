import React from 'react'

const Team = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>

      <div className="row">
      
        <div className="col-md-12 mb-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hems darji</h5>
              <p className="card-text">Web Developer</p>
              <a href="#" className="btn btn-primary">
                View Bio
              </a>
            </div>
            <div className='card-img'>
              <img src='./img/img.jpg' alt='owner img ' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;