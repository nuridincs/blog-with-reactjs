import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../component/Post/Post';
import BlogForm from './BlogForm';
class Blog extends Component {
  state = {
    dataBlog: [],
    tmpBlogForm: null,
    tmpIsUpdate: false,
    showForm: false,
  };

  getPostData = async () => {
    const { data } = await axios.get(
      'http://localhost:3004/posts?_sort=id&_order=desc'
    );

    this.setState({
      dataBlog: data.slice(0, 9),
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostData();
    });
  };

  handleUpdate = (data) => {
    this.setState({
      tmpBlogForm: data,
      tmpIsUpdate: true,
    });
  };

  handleButton = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  componentDidMount() {
    this.getPostData();
  }

  render() {
    const { dataBlog, showForm } = this.state;
    const buttonText = this.state.showForm ? 'Hide Form' : 'Show Form';

    return (
      <>
        <h1 className="text-center text-5xl p-5">Blog</h1>
        <div className="text-center">
          <button
            className="bg-blue-500 rounded-sm p-2 text-white font-semibold"
            onClick={this.handleButton}
          >
            {buttonText}
          </button>
        </div>
        {showForm && (
          <BlogForm
            reInit={() => this.getPostData()}
            formData={this.state.tmpBlogForm}
            isUpdate={this.state.tmpIsUpdate}
          />
        )}
        {dataBlog.map((data) => (
          <Post
            key={data.id}
            data={data}
            remove={this.handleRemove}
            update={this.handleUpdate}
          />
        ))}
      </>
    );
  }
}

export default Blog;
