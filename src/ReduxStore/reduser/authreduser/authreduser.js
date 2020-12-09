

const defaultState={
  userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
}

const authReducer =(state=defaultState, action)=>{
  switch(action.type){
    case 'Test':
      return state;
    default:
      return state;
  }
};

export default authReducer;