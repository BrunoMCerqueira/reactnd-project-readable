import { headers, API } from '../utils/config';

const receiveCategories = categories => ({
  type: 'RECEIVE_CATEGORIES',
  categories
});

export const categoriesAPI = () => {
  return (dispatch) => {
    fetch(`${API}/categories`, { headers })
      .then(res => res.json())
      .then(data => data.categories)
      .then(data => dispatch(receiveCategories(data)));
  }
};
