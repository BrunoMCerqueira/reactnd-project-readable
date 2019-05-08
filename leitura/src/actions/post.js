import { headers, API } from '../utils/config';

const receivePosts = posts => {
  return ({
  type: 'RECEIVE_POSTS',
  posts
})}

export const postsAPI = () => {
  return (dispatch) => {
    fetch(`${API}/posts`, { headers })
      .then(res => res.json())
      .then(data => dispatch(receivePosts(data)));
  }
};

export const postsByCategoryAPI = (category) => {
  if (category) {
    return (dispatch) => {
      fetch(`${API}/${category}/posts`, { headers })
        .then(response => response.json())
        .then(data => dispatch(receivePosts(data)));
    }
  }
};
