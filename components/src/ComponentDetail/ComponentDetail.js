import React from 'react'


const ComponentDetail= (props) => {
  // by convention we call it props
  // type of props is Obj
  return(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar}/>
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="data">
          {props.timeAgo}
        </span>
      </div>
      <div className="text">
        {props.commentTex}
      </div>
    </div>
  </div>
  )
}

export default ComponentDetail;