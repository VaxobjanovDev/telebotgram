const PostMessage = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "POST_MESSAGE_SUCCES":
      return {
        textMessage: action.payload,
        isFetching: true,
        error: false,
      };
    case "POST_MESSAGE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default PostMessage;
