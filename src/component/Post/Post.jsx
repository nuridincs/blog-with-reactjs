import React from 'react';

const Post = (props) => {
  return (
    <div className="card-blog">
      <img src="https://via.placeholder.com/150" alt="Avatar" />
      <div className="container">
        <h4><b>{props.data.title}</b></h4>
        <p>{props.data.body}</p>
        <button className="w-50 text-center bg-green-500 p-2 font-semibold m-4 text-white rounded-sm" onClick={() => props.update(props.data)}>
          Update
        </button>

        <button className="bg-red-500 w-50 text-center m-auto p-2 font-semibold text-white rounded-sm" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default Post;