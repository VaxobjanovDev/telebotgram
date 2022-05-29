const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        token: null,
        isFetching: true,
        error: false,
      };
    case "REGISTER_SUCCES":
      return {
        token: action.payload,
        isFetching: true,
        error: false,
      };
    case "REGISTER_FAILURE":
      return {
        token: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        token: null,
        isFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
