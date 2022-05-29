import { useContext, useState } from "react";
import { registerAPI } from "../../context/authcontext/ApiCall";
import { AuthContext } from "../../context/authcontext/Authcontext";
import "./Login.css";

const Login = () => {

  const [token, setEmail] = useState("")
  const {isFetching, dispatch} = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault()
    registerAPI(token, dispatch)
  }

  return (
    <div className="login">
      <form className="login__form">
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <button className="login__button" onClick={handleClick} disabled={isFetching}>Login</button>
      </form>
    </div>
  );
};

export default Login;
