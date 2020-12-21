import { connect, useSelector} from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import styled from "styled-components";
import userPhoto from '../../../assets/images/user.png'

const Post = (props) => {
  const profile=useSelector(state=>{
    return state.profile.profile.photos.large});
  return (
    <S.Wrapper>
      <div className='imgPost'><img src={profile || userPhoto} alt='img'/></div>
      <div className='messege-like'>
        <div className='messegePost'><span>{ props.message }</span></div>
        <div className='like-dislike-post'>
          <div className='likePost'>
            <button onClick={()=>{
              props.addLike(props.userId, props.id);
            }}><span>Like</span> </button>
            <span>: { props.likesCount }</span>
          </div>
          <div className='disLikePost'>
            <button onClick={()=>{
              props.addDislike(props.userId, props.id);
            }}><span>Dislike</span> </button>
            <span>: {props.disLikeCount}</span>
          </div>
        </div>
      </div>
      {!props.match.params.userId ? (<div className='deletePost'>
        <button onClick={()=>{
          props.deletePost(props.id)
        }}><span>X</span></button>
      </div>): null}
    </S.Wrapper>
  )
};

const S ={
  Wrapper: styled.div`
    background-color: #579194;
    color: white;
    margin: 20px 0;
    padding-left: 10px;
    display: grid;
    grid-template-columns: 20% auto 20%;
    .messege-like {
      display: grid;
      grid-template-rows: 60% 40%;
      grid-column: 2;
    }
    .messegePost {
      width:100%;
      grid-row: 1;
      display:flex;
      justify-content:center;
      flex-direction: column;
      align-items: center;
      span {
        display: block;
      }
    }
    .like-dislike-post{
      display: flex;
      justify-content: space-around;
      align-items: center;
      grid-row: 2;
      margin-bottom: 10px;
    }
    .likePost,
    .disLikePost {
      & button:hover {background: rgba(255,255,255,0);}
      & button:hover:before {
        bottom: 0%;
        top: auto;
        height: 100%;
      }
      & button:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 0;
        width: 100%;
        z-index: -1;
        color: white;
        background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
        transition: .8s cubic-bezier(.165,.84,.44,1);
      }
      & button {
        @media screen and (max-width: 650px) {
          letter-spacing: .5px;
        }
        text-decoration: none;
        outline: none;
        color: white;
        display: inline-block;
        position: relative;
        border: 1px solid;
        border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
        border-image-slice: 1;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        overflow: hidden;
        letter-spacing: 2px;
        transition: .8s cubic-bezier(.165,.84,.44,1);
          span {
            @media screen and (max-width: 650px) {
              font-size: 9px;
              width: 50px;
              height: 20px;
            }
          width: 100%;
          height: 100%;
          color: red;
          font-size: 18px;
        }
      } 
    }
    .deletePost {
      display: flex;
      grid-column: 3;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      button {
        @media screen and (max-width: 650px){
          width: 30px;
          height: 30px;
        }
        text-decoration: none;
        outline: none;
        display: inline-block;
        width: 60px;
        height: 45px;
        line-height: 45px;
        border-radius: 45px;
        font-family: 'Montserrat', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 600;
        color: #524f4e;
        background: white;
        box-shadow: 0 8px 15px rgba(0,0,0,.1);
        transition: .3s;
        position: relative;
        span {
          @media screen and (max-width: 650px) {
            bottom: -35%;
            left: 39%;
          }
          display: block;
          position: absolute;
          bottom: -5%;
          left: 43%;
        }
      }
      button:hover {
        background: #2EE59D;
        box-shadow: 0 15px 20px rgba(46,229,157,.4);
        color: white;
        transform: translateY(-7px);
      }
    }
    .imgPost {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 1;
      height: 100%;
      max-height: 150px;
      border-radius: 40px;
      & img {
        @media screen and (max-width: 650px) {
          width: 50px;
        }
        display: block;
        border-radius: 50%;
        max-width: 100px;
        width: auto;
        height: auto;
      }
    }
  `
}

export default compose(withRouter)(Post);