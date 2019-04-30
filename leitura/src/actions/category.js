import { headers, API } from '../utils/config';

const loadCategories = categories => ({
  type: 'GET_CATEGORIES',
  categories
});

export const categoriesAPI = () => dispatch => {
  fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .then(data => dispatch(loadCategories(data)));
};
