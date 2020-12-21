import { DELETE_PROFILE, SAVE_PHOTO_SUCCESS, SET_STATUS, SET_USER_PROFILE } from "../constans/constans"

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const deleteProfiles = () =>({type: DELETE_PROFILE});