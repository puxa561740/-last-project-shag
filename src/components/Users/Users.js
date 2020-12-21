import styled from "styled-components";
import Paginator from '../../common/Paginator/Paginator'
import User from "./User/User";


const Users =({currentPage, totalUsersCount, pageSize, onPageChanged, users, getUserProfile, ...props})=>{
  return (
    <S.Users>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <S.User>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     getUserProfile={getUserProfile}
                    />
                )
            }
        </S.User>
      
    </S.Users>
  )
};

const S ={
  Users: styled.div`
  background-color: #fff;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
  User: styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  width:100%;
  `
}

export default Users;