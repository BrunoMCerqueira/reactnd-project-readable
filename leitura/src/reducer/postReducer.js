export function postReducer(state = [] , action) {
  const { posts, post } = action;
  switch(action.type) {
    case "RECEIVE_POSTS":
      return [...posts];
    case "ADD_POST":
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
      };
    default:
      return state;
  }
}