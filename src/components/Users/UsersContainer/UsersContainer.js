import { connect, useSelector } from "react-redux";
import Users from "../Users";
import {getUserProfile} from '../../../ReduxStore/reduser/profileReduser/profileReduser';
import {
  follow,
  unfollow, 
  requestUsers
} from '../../../ReduxStore/reduser/usersRedusers/usersRedusers';
import {  toggleFollowingProgress, setCurrentPage } from '../../../ReduxStore/reduser/usersRedusers/action/action';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, 
  getUsers
} from '../../../Selectors/usersSelectors';
import Preloader from "../../../common/Preloader/Preloader";
import { useEffect } from "react";

const UserContainer =(props)=>{

  const state = useSelector(state=>state.users)

  const users= getUsers(state);
  const pageSize= getPageSize(state);
  const totalUsersCount= getTotalUsersCount(state);
  const currentPage= getCurrentPage(state);
  const isFetching=getIsFetching(state);
  const followingInProgress=getFollowingInProgress(state);

  const onPageChanged = (pageNumber) => {
    const {pageSize} = props;
    props.getUsers(pageNumber, pageSize);
}

useEffect(()=>{
    props.getUsers(currentPage, pageSize);
},[])

  return(
    <div>
      {isFetching ? <Preloader/> : null}
      <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   users={users}
                   follow={props.follow}
                   unfollow={props.unfollow}
                   followingInProgress={followingInProgress}
                   getUserProfile={props.getUserProfile}
                   />
    </div>
  )
};

export default connect(null, {follow, getUserProfile, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})(UserContainer);