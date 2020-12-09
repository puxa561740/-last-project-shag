const { combineReducers } = require("redux");
const { default: authReducer } = require("./authreduser/authreduser");

const state = combineReducers({
  auth: authReducer,
})

export default state;