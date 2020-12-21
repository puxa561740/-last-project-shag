import { usersAPI } from "../../../api/api";
import { followSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetching, unfollowSuccess } from "./action/action";
import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW } from "./constans/constans";
import {updateObjectInArray} from '../../../utilit/object-helpers';

const defaultState = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  fake: 9
};


const usersReduser=(state=defaultState,action)=>{
  switch (action.type) {
    case FOLLOW:
        return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
        }
    case UNFOLLOW:
        return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
        }
    case SET_USERS: {
        return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
        }
    }
    default:
        return state;
}
};

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));

      let data = await usersAPI.getUsers(page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}
;
export const follow = (userId) => {
  return async (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
  }
};

export const unfollow = (userId) => {
  return async (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
  }
};

export default usersReduser;