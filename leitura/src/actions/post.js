import { headers, API } from '../utils/config';

const receivePosts = posts => {
  return ({
  type: 'RECEIVE_POSTS',
  posts
})}

const addPost = post => ({
  type: 'ADD_POST',
  post
});

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

export const addPostAPI = (post) => {
  const timestamp = Date.now();
  const id = Math.random().toString();
  post = { ...post, timestamp, id };
  return (dispatch) => {
    fetch(`${API}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(post => dispatch(addPost(post)));
  }
};
