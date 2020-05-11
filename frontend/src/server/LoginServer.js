
import {login_Actions} from '../constants/Login'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const loginServer = {
handleSignIn: handleSignIn
}

export function handleSignIn(username,password)
{
  alert("here cccl")

  var user ={'username':username,'password':password}

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/SignIn', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.signInStatus )
    if(data.signInStatus=='failure'){
      store.dispatch({type:login_Actions.FAILURE,payload:data});
      return ;
      }
    else if(data.signInStatus=='authorized') {
      console.table('auth detail is '+data)
      localStorage.setItem('userToken',data.userDetail.token)
      store.dispatch({type:login_Actions.AUTHORIZED,payload:data});
      return ;
    }
    else if(data.signInStatus == 'not_authorized'){
      store.dispatch({type:login_Actions.NOT_AUTHORIZED,payload:data});
      return ;
    }

     });
   })


return {type:login_Actions.NEW,payload:'none'};

};
