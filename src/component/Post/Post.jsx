import React from 'react';

const Post = ({ data, remove, update, detailPost, ...otherProps }) => {
  const { body, title, id } = data;

  return (
    <div className="card-blog">
      <img src="https://via.placeholder.com/150" alt="Avatar" />
      <div className="container">
        <div className="py-5 font-semibold" onClick={() => detailPost(id)}>
          <h4>{title}</h4>
        </div>
        <p>{body}</p>
        <button
          className="w-50 text-center bg-green-500 p-2 font-semibold m-4 text-white rounded-sm"
          onClick={() => update(data)}
        >
          Update
        </button>

        <button
          className="bg-red-500 w-50 text-center m-auto p-2 font-semibold text-white rounded-sm"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
