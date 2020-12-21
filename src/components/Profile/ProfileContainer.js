import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../ReduxStore/reduser/profileReduser/profileReduser';
import styled from "styled-components";
import Profile from "./Profile";
import { useEffect } from "react";

const ProfileContainer =(props)=>{

  const status=useSelector(state=>state.profile.status);
  const authorizedUserId=useSelector(state=>state.auth.userId);
  const profile=useSelector(state=>state.profile.profile);

  const refreshProfile = () => {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = authorizedUserId;
        if (!userId) {
            props.history.push("/login");
        }
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
}

useEffect(()=>{
  refreshProfile();
},[])

  return (
    <S.ProfileContainer>
        <Profile {...props}  isOwner={!props.match.params.userId}
                     profile={profile}
                     status={status}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}/>

    </S.ProfileContainer>
  )
};

const S ={
  ProfileContainer: styled.div`
  background-color: #fff;
  width:100%;
  `
}



export default compose(
  connect(null, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter
)(ProfileContainer);
