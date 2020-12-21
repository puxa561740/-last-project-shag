import { useState } from "react";
import styled from "styled-components";
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo =({profile, status, updateStatus, isOwner, savePhoto, saveProfile})=>{

const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        savePhoto(e.target.files[0]);
    }
  }

const onSubmit = (formData) => {
    saveProfile(formData).then(
        () => {
            setEditMode(false);
        }
    );
}

if(!profile){
  return <Preloader/>
}

  return (<>
    <S.ProfileContainer>
      <S.Porfile>
          <S.UserImg src={profile.photos.large || userPhoto}/>
          {isOwner && <div>
            
          <button><input type={"file"} onChange={onMainPhotoSelected}/>Сменить фото</button>
          </div>}

          <ProfileStatus status={status} updateStatus={updateStatus}/>
      </S.Porfile>
      <S.ProfileInfo>
        <div>
          { editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
              : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
        </div>
      </S.ProfileInfo>
    </S.ProfileContainer>
  </>
  )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <>
      <div>
          <b>Full name</b>: {profile.fullName }
      </div>
      <div>
          <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
      <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      }

      <div>
          <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
          <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
      {isOwner && <div className='button'><button onClick={goToEditMode}>Edit</button></div>}
  </>
}


const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}


const S={
  ProfileContainer: styled.div`
  display: flex;
  margin: 10px;
  border-radius: 20px;
  @media screen and (max-width: 830px) {
    display: block;
  }
  `,
  Porfile: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 28%;
    margin: 10px;
    background-color: #B6F5E8;
    border-radius: 20px;
    div {
      position: relative;
      
      margin: 10px 10px;
    }
    div > button {
      width: 100%;
      height: 100%;
      text-decoration: none;
      outline: none;
      display: inline-block;
      border-radius: 30px;
      background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
      background-position: 100% 0;
      background-size: 200% 200%;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 300;
      color: white;
      box-shadow: 0 16px 32px 0 rgba(0,40,120,.35);
      transition: .5s;
      position: relative;
      padding: 15px 60px;
    }
    div > button:hover {
      box-shadow: 0 0 0 0 rgba(0,40,120,0);
      background-position: 0 0;
    }
    div > button > input {
      margin: 0;
      padding: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      position: absolute;
      border-radius: 30px;
    }
    
  `,
  ProfileInfo: styled.div`
    @media screen and (max-width: 830px) {
      width: 97%;
    }
    display:flex;
    flex-direction: column;
    width: 68%;
    align-items: center;
    margin: 10px;
    background-color: #B6F5E8;
    border-radius: 20px;
    & div {
      @media screen and (max-width: 830px) {
      width: 97%;
    }
      width: 50%;
      margin: 10px 5px;
      div {
          width: 95%;
        }
      b {
        width: 100%;
        
      }
      
    }
    .button {
      text-align: center;
      button {
        text-decoration: none;
        outline: none;
        display: inline-block;
        padding: 15px 15px;
        margin: 10px 10px;
        border-radius: 10px;
        box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        letter-spacing: 2px;
        color: white;
        transition: .15s ease-in-out;
        width: 100px;
      }
      button:hover {
        box-shadow: 0 0 10px 0 #F137A6 inset, 0 0 10px 4px #F137A6;
        color: #F137A6;
      }
    }
  `,
  UserImg: styled.img`
  margin: 5px auto;
    width:200px;
    border-radius: 20px;
  `
}

export default ProfileInfo;