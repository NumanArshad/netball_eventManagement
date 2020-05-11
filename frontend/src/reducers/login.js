import { login_Actions } from '../constants/Login'
import { login_Status } from '../constants/Login'
const login_initialState = {
  login_status: login_Status.NEW,
  userId: ""

};

export default function (state = login_initialState, action) {
  console.log(action.type);
  switch (action.type) {

    case login_Actions.NEW:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      alert("NNEW")
      return { ...state, login_status: login_Status.NEW };

    case login_Actions.AUTHORIZED:
      console.log("I am from Reducer authorized..");
      return { ...state, login_status: login_Status.AUTHORIZED, userId: action.payload.userDetail.userId }

    case login_Actions.NOT_AUTHORIZED:
      console.log("I am from Reducer not authorized..");
      return { ...state, login_status: login_Status.NOT_AUTHORIZED }
    case login_Actions.FAILURE:
      console.log("I am from Reduce Failure..");
      return { ...state, login_status: login_Status.FAILURE }
    default:
      console.log("default is firing")

      return { ...state };

  }
};
