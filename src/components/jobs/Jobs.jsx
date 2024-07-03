import React from 'react'
import './jobs.css'

const Jobs = ({ imgUrl}) => {
  return (
    <div className="container_jobs">

      <div className="container_jobs-content">
        <div>
            <img src={imgUrl} alt="logo" />
        </div>

      </div>
    </div>
  )
}

export default Jobs