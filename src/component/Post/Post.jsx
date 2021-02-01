import React from 'react';

const Post = (props) => {
  return (
    <div className="card-blog">
      <img src="https://via.placeholder.com/150" alt="Avatar" />
      <div className="container">
        <h4><b>{props.data.id}</b></h4>
        <p>{props.data.title}</p>
        <div className="btn-remove" onClick={props.data.id}>
          Remove
        </div>
      </div>
    </div>
  )
}

export default Post;