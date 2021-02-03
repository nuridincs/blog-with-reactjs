import React, { useState, useEffect } from 'react';
import { getBlog } from '../../stores/Blog/action';
import { useDispatch, useSelector } from 'react-redux';

import './Blog.css';
import Post from '../../component/Post/Post';

const BlogHooks = (props) => {
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog);
  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    getPostData();
  }, [props]);

  const getPostData = () => {
    getBlog();
  };

  return (
    <>
      <p>Blog</p>
      {dataBlog.map((post) => {
        return <Post key={post.id} data={post} />;
      })}
    </>
  );
};

export default BlogHooks;
