import { compose } from "redux";
import styled from "styled-components";
import Dialogs from "../Dialogs/Dialogs";
import Header from "../Header/Header";
import NavBlock from "../NavBlock/NavBlock";
import ProfileContainer from "../Profile/ProfileContainer";
import UserContainer from "../Users/UsersContainer/UsersContainer";

const { Switch, Route, Redirect, withRouter } = require("react-router-dom");

const Body=(props)=>{
  
  if (props.location.pathname==='/') {
    return <Redirect to='/profile'/>
  }

  return (<>
    <S.Header>
      <Header/>
      <S.Body>
        <NavBlock/>
        <Switch>
          <Route exact path='/profile/:userId?' render={()=><ProfileContainer />}/>
          <Route path='/users' render={()=><UserContainer/>}/>
          <Route path='/dialogs/:userId?' render={()=><Dialogs/>}/>
        </Switch>
      </S.Body>
    </S.Header>
    </>
  )
};

const S={
  Body: styled.div`
  display: flex;
  background-color: #fff;
  `,
  Header: styled.div`
  background-color: #fff;
  & > div {
    border-radius: 30px;
  }
    
  `
}

export default compose(withRouter)(Body);