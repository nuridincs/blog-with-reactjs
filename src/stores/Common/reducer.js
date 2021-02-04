import {
  GET_BLOG,
  IS_LOADING,
  INCREMENT_ORDER,
  DECREMENT_ORDER,
} from './constant';

const initialState = {
  blogs: [],
  isLoading: false,
  totalOrder: 0,
};

const blogReducer = (state = initialState, action) => {
  console.log('blogReducer ~ action', action);
  switch (action.type) {
    case GET_BLOG:
      return { ...state, blogs: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case INCREMENT_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
    case DECREMENT_ORDER:
      let totalOrder = 0;

      if (state.totalOrder > 0) {
        totalOrder = state.totalOrder - 1;
      }

      return {
        ...state,
        totalOrder: totalOrder,
      };
    default:
      return state;
  }
};

export default blogReducer;
