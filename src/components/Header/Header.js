import { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../ReduxStore/reduser/authreduser/authReduser";
import {deleteProfile} from '../../ReduxStore/reduser/profileReduser/profileReduser';
import Logout from "../Logout/Logout";

const { default: styled } = require("styled-components");

const Header =(props)=>{

  useEffect(()=>{
    return (logout, deleteProfile)
  })

  return (
    <S.Header >
      <Logout {...props}/>
    </S.Header>
  )
};

const S={
  Header: styled.div`
    background-color: #21EBE7;
    margin: 5px;
    width: 100%;
    height:7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div {
      border-radius: 30px;
    }
  `
};

export default connect(null,{logout, deleteProfile})(Header);