import React from 'react';
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

let User = ({user, followingInProgress, unfollow, follow, getUserProfile}) => {
    return (
       <S.User>
          <div className='header-user'>
              <div>
                  <NavLink to={'/profile/' + user.id} onClick={()=>{
                      getUserProfile(user.id);
                  }}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatarIMG'
                        />
                  </NavLink>
              </div>
              <div className='followed'>
                  {user.followed
                      ? <button disabled={followingInProgress
                          .some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>
                          Unfollow</button>
                      : <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>
                                Follow</button>}

              </div>
          </div>
          <div className='info-user'>
              <div>
                <div><span>Name :</span><span> {user.name}</span></div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </div>
          </div>
      </S.User>)
}

const S ={
  User: styled.div`
  @media screen and (max-width: 750px) {
      width: 45%;
  }
  @media screen and (max-width: 500px) {
      width: 90%;
  }
    padding-bottom: 20px;
    width: 30%;
    height: 200px;
    margin: 10px 0;
    border:2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #18F5EC;
    .followed > button {
        cursor: pointer;
        text-decoration: none;
        outline: none;
        display: inline-block;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
        border: 2px solid #fe6637;
        border-radius: 8px;
        font-family: 'Montserrat', sans-serif; 
        color: #fe6637;
        transition: .2s ease-in-out;
    }
    .followed > button:before {
        content: "";
        background: linear-gradient(90deg, rgba(255,255,255,.1), rgba(255,255,255,.5));
        height: 50px;
        width: 50px;
        position: absolute;
        top: -8px;
        left: -75px;
        transform: skewX(-45deg);
        }
    .followed > button:hover {
        background: #fe6637;
        color: #fff;
    }
    .followed > button:hover:before {
        left: 150px;
        transition: .5s ease-in-out;
    }
  .info-user {
      display: flex;
      flex-direction: column;
      align-items: center;
      & div {
          div {
            display: flex;
            justify-content: start;
        }
      }
  }
  .header-user {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  & img {
    width: 100px;
  }
  `
}

export default User;