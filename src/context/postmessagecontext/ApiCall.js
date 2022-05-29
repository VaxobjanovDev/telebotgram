import axios from "axios";
import {postMessageStart,postMessageSucces,postMessageFailure} from'./PostMessageAction'


export const postMessage = async (dispatch, textMessage) => {
  dispatch(postMessageStart());
  try {
    const res = await axios.post("/message/send-text", textMessage, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("token")).payload.token,
      },
    });
    dispatch(postMessageSucces(res.data));
  } catch (e) {
    dispatch(postMessageFailure());
  }
};


