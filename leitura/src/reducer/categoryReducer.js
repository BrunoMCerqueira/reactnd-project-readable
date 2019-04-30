export function categoryReducer ( state = [], action) {
  switch(action.type) {
    case 'GET_CATEGORIES' :
      return state.categories
    default:
      return state
  }
}