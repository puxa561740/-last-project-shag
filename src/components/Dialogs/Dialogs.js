import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import Messeges from "./UserDialogItems/Masseges/Messeges";
import UserDialog from "./UserDialogItems/UserDialogItems";
import { getDialog } from "../../ReduxStore/reduser/dialogReduser/dialogReduser";

const Dialogs =(props)=>{

  const dialog = useSelector(state=> state.dialog);
  
  const dialogsElements = dialog.dialogs.map(dial=>(<UserDialog 
    name={dial.name}
    userId={dial.userId}
    key={dial.userId}
    getDialog={props.getDialog}
  />))

  const masseges = dialog.activeUserDialog[0].masseges.map(mes=><Messeges messeg={mes.massege}/>)||null
  console.log(masseges)
  

  return(
    <S.Dialogs>
      <div className='dialog-user'>
        <div>{dialogsElements}</div>
      </div>
      <div className='dialog-massege'>
        <div>{masseges}</div>
      </div>
    </S.Dialogs>
  )
};

const S ={
  Dialogs: styled.div`
  background-color: #fff;
  width:100%;
  display:flex;
  /* flex-direction: column; */
  justify-content: center;
  width: 90%;
  .dialog-user,
  .dialog-massege {
    border-radius: 30px;
    margin: 10px;
    padding: 10px 0 0 0;
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .dialog-user {
    width: 40%;
    background-color: #C9FCFF;

  }
  .dialog-massege {
    width: 50%;
    background-color: #C9FCFF;
  } 
  `
}

export default connect(null, {getDialog})(Dialogs);