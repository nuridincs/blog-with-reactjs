import React, {Component, Fragment} from 'react';
import './Blog.css';
import Post from '../../component/Post/Post';

class Blog extends Component {
  state = {
    dataBlog: []
  }

  getPostData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => {
      // console.log('Blog ~ .then ~ json', json)
      this.setState({
        dataBlog: json
      })
    })
  }

  componentDidMount() {
    this.getPostData();
  }

  render() {
    return (
      <Fragment>
        <p>Blog</p>
        {
          this.state.dataBlog.map(post => {
            return <Post key={post.id} data={post} />
          })
        }
      </Fragment>
    )
  }
}

export default Blog;