export const showLogin = () => (dispatch) => {
  dispatch({
    type: "SHOW_LOGIN",
    payload: { isLoginVisible: true },
  });
};
export const hideLogin = () => (dispatch) => {
  dispatch({
    type: "HIDE_LOGIN",
    payload: { isLoginVisible: false },
  });
};
