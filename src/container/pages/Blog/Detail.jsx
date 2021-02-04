import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = (props) => {
  const [dataPost, setDataPost] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const id = props.match.params.id;
    const { data } = await axios.get(`http://localhost:3004/posts/${id}`);
    setDataPost(data);
  };

  return (
    <div className="container card-body">
      <h1>{dataPost.title}</h1>
      <div>{dataPost.body}</div>
    </div>
  );
};

export default Detail;
