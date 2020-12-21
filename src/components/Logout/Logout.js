import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import user from '../../assets/images/user.png'

const Logout=(props)=>{

  const isAuth=useSelector(state=>state.auth.isAuth);
  const login=useSelector(state=>state.auth.login);
  const profileImg = useSelector(state=>state.profile);
  
 useEffect(()=>{
 }, [isAuth,profileImg])

 if(isAuth && profileImg.profile) {
   return (
    <S.Logout>
      <div>
        <span>{login}</span> 
        <img src={profileImg.profile.photos.large||user} alt='user img'/> 
        <button onClick={props.logout}>Log out</button> 
        </div>
              
  </S.Logout>
   )
 } 
  return (
    <S.Logout>
      <NavLink to={'/login'}>Login</NavLink>
    </S.Logout>
  )
};

const S ={
  Logout: styled.div`
  float: right;

  div {
    display: flex;
    align-items: center;
    span {
      padding-left: 10px;
    }
  }
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
  }
  & button {
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: inline-block;
    color: white;
    margin-right: 20px;
    padding: 10px 10px;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    transition: .5s
  }
  button:hover {
    background-position: right center;
    }
  `
}

export default Logout;