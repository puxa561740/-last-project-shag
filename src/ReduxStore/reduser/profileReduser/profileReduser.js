import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../../../api/api";
import { savePhotoSuccess, setStatus, setUserProfile,deleteProfiles } from "./action/action";
import {  DELETE_PROFILE, SAVE_PHOTO_SUCCESS, SET_STATUS, SET_USER_PROFILE } from "./constans/constans";

const defaultState={
  profile: null,
  status: "",
};

const profileReduser = (state=defaultState, action)=>{
  switch (action.type) {
    case SET_STATUS: 
        return {
            ...state,
            status: action.status
        }

    case SET_USER_PROFILE: 
        return {...state, profile: action.profile};

    case SAVE_PHOTO_SUCCESS: 
        return {...state, profile: {...state.profile, photos: action.photos }};

    case DELETE_PROFILE:
      return{
        ...state,
        profile: null,
        status: ""
      }
    default:
        return state;
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data||''));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
      }
      
  } catch(error) {
    console.log('ERROR')
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
  } else {
      dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0]);
  }
};

export const deleteProfile = ()=>(dispatch)=>{
  return dispatch(deleteProfiles())};

export default profileReduser;