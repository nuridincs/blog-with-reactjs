import axios from 'axios';
import {GET_BLOG, IS_LOADING} from './constant';

const setLoading = (payload) => ({
    type: IS_LOADING,
    payload
  })

export const getBlog = async () => {
  setLoading(true);

  try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('getBlog ~ data', data)

    return {
      type: GET_BLOG,
      payload: data
    };
  } catch(error) {
    console.log('getBlog ~ error', error)
  } finally {
    setLoading(false);
  }
}