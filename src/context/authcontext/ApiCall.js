import axios from "axios"
import { registerFailure, registerStart, registerSucces } from "./AuthActions"

export const registerAPI = async(token,dispatch)=>{
	dispatch(registerStart())
	  try{
		  const res = await axios.post("auth/subscribe/"+token, token)
		  dispatch(registerSucces(res.data))
	  }catch(e){
		  dispatch(registerFailure())
	  }
  }


  