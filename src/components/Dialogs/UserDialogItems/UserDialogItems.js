import { NavLink } from "react-router-dom"
import styled from "styled-components";

const UserDialog = (props)=>{
const path = '/dialogs/' + props.userId;

  return (
    <S.Wrapper>
      <div className='navlink-dialog'>
        <NavLink to={path} onClick={()=>{
            props.getDialog(props.userId)
        }}><span>{props.name}</span></NavLink>
      </div>
    </S.Wrapper>
  )
};

const S ={
  Wrapper: styled.div`
  text-align: center;
  margin: 0 10px;
  max-width: 80%;
  
    margin-top: 15px;
    .navlink-dialog {
      text-align: center;
      width: 100%;
      a {
        text-decoration: none;
        outline: none;
        display: inline-block;
        border-radius: 30px;
        padding: 0 10px;
        background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
        background-position: 100% 0;
        background-size: 200% 200%;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        @media screen and (max-width: 600px) {
          font-size: 12px;
        }
        font-weight: 300;
        color: white;
        box-shadow: 0 16px 32px 0 rgba(0,40,120,.35);
        transition: .5s;
      }
      a:hover {
        box-shadow: 0 0 0 0 rgba(0,40,120,0);
        background-position: 0 0;
      }
    }
  `
}

export default UserDialog;