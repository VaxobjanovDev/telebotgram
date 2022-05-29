import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authcontext/Authcontext";
import { PostMessageContextProvider } from "./context/postmessagecontext/PostMessageContext";

ReactDOM.render(
  <AuthContextProvider>
      <PostMessageContextProvider>
        <App />   
      </PostMessageContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
