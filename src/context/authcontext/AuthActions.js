export const registerStart = () => ({
  type: "REGISTER_START",
});

export const registerSucces = (token) => ({
  type: "REGISTER_SUCCES",
  payload: token,
});

export const registerFailure = () => ({
  type: "REGISTER_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});
