export function postReducer(state = [] , action) {
  const { posts } = action;
  switch(action.type) {
    case "RECEIVE_POSTS":
      return [...posts];
    default:
      return state;
  }
}