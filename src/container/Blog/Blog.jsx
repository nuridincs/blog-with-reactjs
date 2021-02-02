import React, {Component, Fragment} from 'react';
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
  }

  getPostData = async () => {
    const {data} = await axios.get('http://localhost:3004/posts?_sort=id&_order=desc');

    this.setState({
      dataBlog: data
    })
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostData();
    })
  }

  handleUpdate = (data) => {
    this.setState({
      tmpBlogForm: data,
      tmpIsUpdate: true,
    })
  }

  componentDidMount() {
    this.getPostData();
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-center text-5xl p-5">Blog</h1>
        <div className="text-center">
          <button className="bg-blue-500 rounded-sm p-2 text-white font-semibold" onClick={() => {this.setState({showForm: !this.state.showForm})}}>
            {
              this.state.showForm
              ? 'Hide Form' : 'Show Form'
            }
          </button>
        </div>
        {
          this.state.showForm
          ?
          <BlogForm reInit={() => this.getPostData()} formData={this.state.tmpBlogForm} isUpdate={this.state.tmpIsUpdate} />
          : null
        }
        {
          this.state.dataBlog.map(post => {
            return <Post
              key={post.id}
              data={post}
              remove={(data) => this.handleRemove(data)}
              update={(data) => this.handleUpdate(data)} />
          })
        }
      </Fragment>
    )
  }
}

export default Blog;