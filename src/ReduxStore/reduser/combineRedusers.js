import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import dialogReduser from "./dialogReduser/dialogReduser";
import initializedReduser from "./initialReduser/initialReduser";
import profileReduser from "./profileReduser/profileReduser";
import usersReduser from "./usersRedusers/usersRedusers";
import userPostReduser from "./postReduser/userPostsReduser/postReduser";
import authReduser from "./authreduser/authReduser";
const { applyMiddleware, combineReducers, compose, createStore } = require("redux");

const reducers = combineReducers({
  auth: authReduser,
  form: formReducer,
  dialog: dialogReduser,
  initialized: initializedReduser,
  profile: profileReduser,
  users: usersReduser,
  userPosts: userPostReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const state = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default state;