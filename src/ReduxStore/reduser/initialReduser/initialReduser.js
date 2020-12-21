import { getAuthUserData_ } from "../authReduser/actions/actions";
import { initializedSuccess } from "./action/action";
import { INITIALIZED_SUCCESS } from "./constans/constans";

const defaultState ={
  initialized: false,
  globalError: null
};

const initializedReduser=(state=defaultState, action)=>{
  switch(action.type){
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData_());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
        
}}

export default initializedReduser;