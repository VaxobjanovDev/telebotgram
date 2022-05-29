import { useReducer } from "react";
import { createContext } from "react";
import PostMessage from "./PostMessageReducer";

const initialState = {
  textMessage: "",
  isFetching: false,
  error: false,
};

export const PostMessageContext = createContext(initialState);

export const PostMessageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostMessage, initialState);

  return (
    <PostMessageContext.Provider
      value={{
        textMessage: state.textMessage,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostMessageContext.Provider>
  );
};
