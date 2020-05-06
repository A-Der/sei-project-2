import React from 'react'

const PicCard = ({ copyright, date, explanation, hdurl, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="title is-1">{title}</div>
        <figure className="image is-4by3">
          <img src={hdurl} alt={title}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Owner: {copyright}</p>
          </div>
        </div>
        <div className="content">
          {explanation} 
          <br></br><br></br>
          <time dateTime="2016-1-1"><strong>Taken: {date}</strong></time>
        </div>
      </div>
    </div>
  )
}

export default PicCard