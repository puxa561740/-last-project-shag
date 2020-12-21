import { addDislikeActionCreator, addLikeActionCreator, addPostActionCreator, deleteDislikeActionCreator, deleteLikeActionCreator, deletePostActionCreator } from "./action/action";
import { ADD_DISLIKE, ADD_LIKE, ADD_POST, DELETE_POST } from "./constans/constans";

const defaultState={
  userPosts: [
    {userId: 13106, id: 1, message: 'Hi, how are you?', likesCount: 12, disLikesCount: 0},
    {userId: 13106, id: 2, message: 'It\'s my first post', likesCount: 11, disLikesCount: 0},
    {userId: 13106, id: 3, message: 'Blabla', likesCount: 11, disLikesCount: 0},
    {userId: 13106, id: 4, message: 'Dada', likesCount: 11, disLikesCount: 0}    
  ],
  userId: 13106,
};

const userPostReduser = (state=defaultState, action)=>{
  switch(action.type){
    case ADD_POST: 
    let id = state.userPosts.length+1||1;
      let newPost = {
          userId: state.userId,
          id: id,
          message: action.newPostText,
          likesCount: 0, 
          disLikesCount: 0
      };
      return {
          ...state,
          userPosts: [...state.userPosts, newPost],
          newPostText: ''
      };
  case DELETE_POST:
    return {...state, userPosts: state.userPosts.filter(p => p.id !== action.postId)};

  case ADD_LIKE:
    return {...state, userPosts: state.userPosts.map( obj => {
      if(obj.id===action.id){
        return {...obj, likesCount: obj.likesCount+1} 
      }
      return obj
    })}
    case ADD_DISLIKE:
      return {...state, userPosts: state.userPosts.map( obj => {
        if(obj.id===action.id){
          return {...obj, disLikesCount: obj.disLikesCount+1} 
        }
        return obj
      })}

    default:
      return state;
  }
};

export const addPost =(newPostText) => (dispatch) => { 
  dispatch(addPostActionCreator(newPostText))};

 export const deletePost=(postId) => (dispatch) => { 
  dispatch(deletePostActionCreator(postId))};

export const addDislike = (userId, id)=> dispatch => {
  dispatch(addDislikeActionCreator(userId, id));
};

export const addLike = (userId, id)=> dispatch => {
  dispatch(addLikeActionCreator(userId, id));
};

export const deleteLike = (userId, id)=>dispatch =>{
  dispatch(deleteLikeActionCreator(userId, id));
};

export const deleteDislike = (userId, id)=>dispatch=>{
  dispatch(deleteDislikeActionCreator(userId, id));
};

export default userPostReduser;