import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../../../api/api";
import { GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA } from "../constans/constans";

export const loginIn =(email, password, rememberMe, captcha) => {
  return async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
      dispatch(getAuthUserData_())
  } else {
    if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }}
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
  };
}

  export const getAuthUserData_ = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, payload:
      {userId, email, login, isAuth}
});

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const logout_ = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
  }
};