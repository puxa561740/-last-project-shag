import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import Body from "./components/Body/Body";
import {deleteProfile} from './ReduxStore/reduser/profileReduser/profileReduser';
import {getUserProfile} from './ReduxStore/reduser/profileReduser/profileReduser';
import { initializeApp } from "./ReduxStore/reduser/initialReduser/initialReduser";
import styled from "styled-components";
const { default: Login } = require("./containers/AuthBlock/AuthBlock");


const  LastStepShag = ({getUserProfile, deleteProfile, initializeApp}) =>{

const isAuth= useSelector(state=>state.auth.isAuth);
const userId= useSelector(state=>state.auth.userId);
const isInitializ = useSelector(state=>state.initialized.initialized);

  useEffect(()=>{
    initializeApp();
  },[]);

  if(!isAuth){
    deleteProfile();
  }

  const isInit =()=>{
    if(!isInitializ){
      return <Preloader/>
    }
    return isAuth ? (getUserProfile(userId), <Route exact to='/' render={()=><Body/>}/>): <Login/> 
  };

  return (
    <S.Wrapper >
        {isInit()}
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
  background-color: #21EBE7;
  `
}

export default compose(withRouter, connect(null,{initializeApp, getUserProfile, deleteProfile}))(LastStepShag);
