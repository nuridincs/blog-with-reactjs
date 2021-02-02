import {GET_BLOG, IS_LOADING} from './constant';


const initialState = {
  blogs: [],
  isLoading: false
};

const blogReducer = (state = initialState, action) => {
  console.log('blogReducer ~ action', action)
  console.log('blogReducer ~ action payload', action.payload)
  switch (action.type) {
    case GET_BLOG:
      return { ...state, blogs: action.payload }
    case IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default blogReducer;