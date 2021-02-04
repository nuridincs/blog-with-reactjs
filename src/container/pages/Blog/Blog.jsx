import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../../component/Post/Post';
import BlogForm from './BlogForm';

const Blog = (props) => {
  const [state, setState] = useState({
    tmpBlogForm: null,
    tmpIsUpdate: false,
    showForm: false,
  });
  const [dataBlog, setStateBlog] = useState([]);

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = async () => {
    const { data } = await axios.get(
      'http://localhost:3004/posts?_sort=id&_order=desc'
    );

    setStateBlog(data.slice(0, 9));
  };

  const handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      getPostData();
    });
  };

  const handleUpdate = (data) => {
    setState({ ...state, tmpBlogForm: data, tmpIsUpdate: true });
  };

  const handleButton = () => {
    setState({ ...state, showForm: !state.showForm });
  };

  const handleDetail = (id) => {
    props.history.push(`detail-post/${id}`);
  };

  const buttonText = state.showForm ? 'Hide Form' : 'Show Form';

  return (
    <>
      <h1 className="text-center text-5xl p-5">Blog</h1>
      <div className="text-center">
        <button
          className="bg-blue-500 rounded-sm p-2 text-white font-semibold"
          onClick={handleButton}
        >
          {buttonText}
        </button>
      </div>
      {state.showForm && (
        <BlogForm
          reInit={() => getPostData()}
          formData={state.tmpBlogForm}
          isUpdate={state.tmpIsUpdate}
        />
      )}
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 border-red-500">
            Will grow and shrink as needed
          </div>
          <div className="border-2 border-red-500">Will not grow or shrink</div>
          <div className="border-2 border-red-500">
            Will grow and shrink as needed
          </div>
        </div>
      </div> */}
      <div className="">
        {dataBlog.map((data) => (
          <Post
            key={data.id}
            data={data}
            remove={handleRemove}
            update={handleUpdate}
            detailPost={handleDetail}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
