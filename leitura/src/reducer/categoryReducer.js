export function categoryReducer ( state = [], action) {
  const { categories } = action;

  switch(action.type) {
    case 'RECEIVE_CATEGORIES' :
      return state.concat(categories);
    default:
      return state
  }
}