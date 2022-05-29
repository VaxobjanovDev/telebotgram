export const postMessageStart = () => ({
  type: "POST_MESSAGE_START",
});

export const postMessageSucces = (textMessage) => ({
  type: "POST_MESSAGE_SUCCES",
  payload: textMessage,
});

export const postMessageFailure = () => ({
  type: "GET_USER_FAILURE",
});
