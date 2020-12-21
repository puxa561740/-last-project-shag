import { GET_DIAlOG } from "./constans/constans";
import {getUserDialog} from './action/action';

const defaultState={
activeUserDialog: [{masseges:[]}],
dialogs: [
  {userId: 1, name: 'Yra', masseges: [
    {id: 1, massege: 'Hi' },
    {id: 2, massege: 'Y am GURU' },
    {id: 3, massege: 'Your' },
    {id: 4, massege: 'Tehno' }
    ]
  },
  {userId: 2, name: 'Helen', masseges: [
    {id: 1, massege: 'Hi' },
    {id: 2, massege: 'Y am Genza' },
    {id: 3, massege: 'Your' },
    {id: 4, massege: 'Tehno' },
  ]
},
  {userId: 3, name: 'Genadiy', masseges: [
    {id: 1, massege: 'Hi' },
    {id: 2, massege: 'Y am Gearsim' },
    {id: 3, massege: 'Your' },
    {id: 4, massege: 'Tehno' },
  ]
},
  {userId: 4, name: 'Gerasim', masseges: [
    {id: 1, massege: 'Hi' },
    {id: 2, massege: 'Y am Lida' },
    {id: 3, massege: 'Your' },
    {id: 4, massege: 'Tehno' },
  ]
  },
],
};

const dialogReduser=(state = defaultState, action)=>{
  switch (action.type) {
    case GET_DIAlOG:
      return {
        ...state,
        activeUserDialog: state.dialogs.filter(dial=>dial.userId===action.userId)
      }
  
    default:
      return state;
  }
};

export const getDialog = (userId)=>(dispatch)=>{
  return dispatch(getUserDialog(userId))};


export default dialogReduser;