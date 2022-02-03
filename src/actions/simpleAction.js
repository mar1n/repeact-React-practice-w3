export const showLogin = () => (dispatch) => {
  dispatch({
    type: "SHOW_LOGIN",
    payload: { isLoginVisible: true },
  });
};
