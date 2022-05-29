import { useEffect, useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  token:JSON.parse(localStorage.getItem("token")) ||null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state.token]);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
