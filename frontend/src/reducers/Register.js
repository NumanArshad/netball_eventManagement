import {register_Actions} from '../constants/Register'
import {register_Status} from '../constants/Register'
 const register_initialState = {
    register_status: register_Status.NEW,

  };

  export default function (state = register_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case register_Actions.NEW:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
        return { ...state, register_status: register_Status.NEW};
      case register_Actions.POST:// start fetching posts and set loading = true
        console.log("I am from Reduce Loading..");
        return { ...state, register_status: register_Status.LOADING};
      case register_Actions.CREATED:
         console.log("I am from Reducer created..");
        return {...state, register_status: register_Status.SUCCESS}
      case register_Actions.FAILURE:
         console.log("I am from Reduce Failure..");
        return {...state, register_status: register_Status.FAILURE}
        case register_Actions.EXISTING:
           console.log("I am from Reduce Failure..");
          return {...state, register_status: register_Status.EXISTING}
default:
      console.log("default is firing") 

        return {...state,register_status: register_Status.NEW};

    }
  };
