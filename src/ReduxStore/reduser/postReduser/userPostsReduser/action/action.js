import { ADD_DISLIKE, ADD_LIKE, ADD_POST, DELETE_DISLIKE, DELETE_LIKE, DELETE_POST } from "../constans/constans";


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});
export const addLikeActionCreator = (userId, id)=>({type: ADD_LIKE,userId,id});
export const deleteLikeActionCreator = (userId, id)=>({type: DELETE_LIKE,userId,id});
export const addDislikeActionCreator = (userId, id)=>({type: ADD_DISLIKE,userId,id});
export const deleteDislikeActionCreator = (userId, id)=>({type: DELETE_DISLIKE,userId,id});