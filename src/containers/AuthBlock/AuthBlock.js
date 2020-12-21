import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import styled from "styled-components";
import { createField, Input } from "../../common/FormControl/FormControl";
import Body from "../../components/Body/Body";
import {login} from '../../ReduxStore/reduser/authreduser/authReduser';
import { required } from "../../utilit/validators/validators";
const {  reduxForm } = require("redux-form");


const AuthBlock = ({handleSubmit, error, captchaUrl}) => {
  const auth = useSelector(state=>state.auth.isAuth);
  if (auth) {
    <Redirect to='/'/>
  }


  return (
      <form onSubmit={handleSubmit}>
          {createField("Email", "email", [required], Input)}
          {createField("Password", "password", [required], Input, {type: "password"})}
          {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me.", 'checkbox')}

          { captchaUrl && <img src={captchaUrl} alt=''/>}
          { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }


          {error && <div >
              {error}
          </div>
          }
          <div>
              <button>Login in</button>
          </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(AuthBlock);


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
      return <Route path='/' render={()=><Body/>}/>
  }

  return <S.Main>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </S.Main>
}

const mapStateToprops=(state)=>({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});


const S ={
  Main: styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  height: 99vh;
  background-color: #21EBE7;
  div {
    text-align: center; 
  }
  input::placeholder {
    text-align: center;
  }
  input {
    width: 60%;
    min-width: 280px;
    border-radius: 20px;
    margin: 10px;
    outline: none;
  }
  span {
    color: black;
    font-size: large;
    
  }
  h1 {
    color: #fff;
  }
  .checkbox {
    display: flex;
    width: 100%;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    position:relative; 
    span {
          width: 50%;
          position: absolute;
          left: 0;
          z-index: 0;
        }
    div{
      width: 100%;
      div{
        input {
          top: 30%;
          left: 0;
          position:absolute;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 20px;
          cursor: pointer;
          z-index: 10;
          }
      }
    }
  }
  button {
    text-decoration: none;
    outline: none;
    display: inline-block;
    width: 140px;
    height: 45px;
    line-height: 45px;
    border-radius: 45px;
    margin: 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 600;
    color: #524f4e;
    background: white;
    box-shadow: 0 8px 15px rgba(0,0,0,.1);
    transition: .3s;
    }
    button:hover {
      background: #2EE59D;
      box-shadow: 0 15px 20px rgba(70,212,59,.4);
      color: white;
      transform: translateY(-7px);
    }
  `
}


export default connect(mapStateToprops, {login})(Login);