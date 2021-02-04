import axios from 'axios';
import React, { Component } from 'react';

class BlogForm extends Component {
  state = {
    blogForm: {
      userId: 1,
      id: 1,
      title: '',
      body: '',
    },
    isUpdate: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.formData !== null) {
      this.setState({
        blogForm: nextProps.formData,
        isUpdate: nextProps.isUpdate,
      });
    }
  }

  handleFormChange = (e) => {
    let blogFormNew = { ...this.state.blogForm };
    if (!this.state.isUpdate) {
      blogFormNew['id'] = new Date().getTime();
    }
    blogFormNew[e.target.name] = e.target.value;

    this.setState({
      blogForm: blogFormNew,
    });
  };

  handleSubmit = async () => {
    try {
      if (this.state.isUpdate) {
        await axios.put(
          `http://localhost:3004/posts/${this.state.blogForm.id}`,
          this.state.blogForm
        );
      } else {
        await axios.post('http://localhost:3004/posts', this.state.blogForm);
      }
      this.props.reInit();

      this.setState({
        isUpdate: false,
        blogForm: {
          userId: 1,
          id: 1,
          title: '',
          body: '',
        },
      });
    } catch (error) {
      console.log('BlogForm ~ error', error);
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={this.state.blogForm.title}
                name="title"
                type="text"
                onChange={this.handleFormChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Content
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={this.state.blogForm.body}
                name="body"
                onChange={this.handleFormChange}
              />
            </div>
          </div>
          <div className="m-auto">
            <button
              className="bg-blue-500 w-50 text-center m-auto p-2 font-semibold text-white rounded-sm"
              onClick={this.handleSubmit}
            >
              Simpan
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default BlogForm;
