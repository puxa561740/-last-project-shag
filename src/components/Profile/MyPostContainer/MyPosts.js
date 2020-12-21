import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { reduxForm } from "redux-form";
import styled from 'styled-components';
import { createField, Textarea } from "../../../common/FormControl/FormControl";
import { maxLengthCreator, required } from "../../../utilit/validators/validators";
import Post from './Post';

const maxLength10 = maxLengthCreator(9);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
      {createField("Post message","newPostText", [required, maxLength10], Textarea )}
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements =
        [...props.userPosts]
            .reverse()
            .map(p => <Post 
              key={p.id} 
              message={p.message} 
              likesCount={p.likesCount}
              disLikeCount={p.disLikesCount} 
              id={p.id} 
              deletePost={props.deletePost}
              addLike={props.addLike}
              addDislike={props.addDislike}
              userId={props.userId}
              />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    
    if (props.match.params.userId ) {
        return (
            <S.Post>
                <h3>My posts</h3>
                <div className='my-post'>
                    {postsElements}
                </div>
            </S.Post>
        )
    }
    return (
        <S.Post>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className='my-post'>
                {postsElements}
            </div>
        </S.Post>
    )
});

const S={
  Post: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #C9FCFF;
  .my-post {
    @media screen and (max-width: 650px) {
        width: 95%;
    }
      width: 80%;
    & >  div {
        @media screen and (max-width: 650px) {
            height: 150px;
        }
        border-radius: 20px;
    } 
  }
  form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
          width: 100%;
          margin: 5px 5px;
          text-align: center;
          textarea {
            @media screen and (max-width: 650px) {
                height: 100px;
                margin-right: 15px;
            }
            width: 90%;
            max-width: 100%;
            max-height: 200px;
            }
          button {
            text-decoration: none;
            outline: none;
            display: inline-block;
            padding: 15px 30px;
            margin: 10px 20px;
            border-radius: 10px;
            box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            transition: .15s ease-in-out;
            }
            button:hover {
            box-shadow: 0 0 10px 0 #F137A6 inset, 0 0 10px 4px #F137A6;
            color: #F137A6;
            }
      }
  }
  `
}
export default compose(withRouter, connect(null, null))(MyPosts);