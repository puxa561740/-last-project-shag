
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import MyPosts from "./MyPosts";
import { addPost, deletePost, addLike, addDislike } from '../../../ReduxStore/reduser/postReduser/userPostsReduser/postReduser';

const MyPostsContainer =(props)=>{

  const userPosts = useSelector(state=> state.userPosts.userPosts);
  const userId = useSelector(state=> state.userPosts.userId);
  
  return (
    <>
      <MyPosts {...props} 
      userPosts={userPosts}
      userId={userId}
      userPhoto={props.userPhoto}
      />
    </>
  )
};

export default compose(withRouter,
  connect(null,{ addPost, deletePost, addLike, addDislike }))(MyPostsContainer);