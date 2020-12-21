import { getAuthUserData_, loginIn, logout_ } from "./actions/actions";
import { GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA } from "./constans/constans";

const defaultState={
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer =(state = defaultState, action)=>{
  switch(action.type){
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
    }
    default:
      return state;
  }
};

export const getAuthUserData = getAuthUserData_;
export const login = loginIn;
export const logout = logout_;

export default authReducer;
