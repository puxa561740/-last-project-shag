import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.users;
};

export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.currentPage;
};

export const getIsFetching = (state) => {
    return state.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.followingInProgress;
};

export const countSomethingDifficult = (state) => {
    //for... math... big arrays
    let count = 23;
    return count;
};