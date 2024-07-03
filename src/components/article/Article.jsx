import React from 'react'
import './article.css'

const Article = ({ imgUrl, desc, title}) => {
  return (
    <div className="container_article">
      <div className="container_article-image">
       
      </div>
      <div className="container_article-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
          
        </div>
        <p>Learn More </p>
      </div>
    </div>
  )
}

export default Article