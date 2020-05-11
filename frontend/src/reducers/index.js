import login_Reducer from './login';
import register_Reducer from './Register';
import todo_Reducer from './Todo';
import manageteam_Reducer from './Manage_Team';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  login_Reducer,
  register_Reducer,
  manageteam_Reducer,
   todo_Reducer
});
export default rootReducer