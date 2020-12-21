import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBlock =(props)=>{

  return(
    <S.NavBlock>
      <p>Navigation</p>
      <div>
        <div><NavLink to='/profile'>Profile</NavLink></div>
        <div><NavLink to='/users'>Users</NavLink></div>
        <div><NavLink to='/dialogs'>Dialogs</NavLink></div>
        <div><NavLink to='/newsfeed'>News feed</NavLink></div>
      </div>
    </S.NavBlock>
  )
};

const S={
  NavBlock: styled.div`
  border-radius: 30px;
  background-color: coral;
  width: 12%;
  height:80vh;
  min-width: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  & > p {
    font-size: 24px;
    color: #C9FCFF;
    font-weight: bold;
    @media screen and (max-width: 1000px){
      font-weight: lighter;
      font-size: 12px;
    }
  }
  & div > a {
  text-decoration: none;
  outline: none;
  padding: 3px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 2px solid #C9FCFF;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif; 
  color: #C9FCFF;
  transition: .2s ease-in-out;
  @media screen and (max-width: 1000px){
      font-weight: lighter;
      font-size: 12px;
    }
}
& div > a:before {
  content: "";
  background: linear-gradient(90deg, rgba(255,255,255,.1), rgba(255,255,255,.5));
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
& div > a:hover {
  background: #9ADDE0;
  color: #fff;
}
& div > a:hover:before {
  left: 150px;
  transition: .5s ease-in-out;
}
  `
}

export default NavBlock;