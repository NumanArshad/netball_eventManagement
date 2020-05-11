import {item_Actions} from '../constants/addItem'
import store from '../store/index'

import {ROOT_URL} from '../constants/config';


export const itemServer = {
handleAdd: handleAdd,
handleList: handleList
}
export function handleAdd(item,userId)
{
  alert("add called")
  var user ={'courseName':item,'userId':userId}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/postAll', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8',
        'Authorization':'Bearer '+localStorage.getItem('userToken')},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.itemStatus )
      console.log(data.itemStatus)
    if(data.itemStatus=='Failure') {
      store.dispatch({type:item_Actions.item_Create.FAILURE,payload:data});
      }
    else if(data.itemStatus=='created') {
      alert("created"+JSON.stringify(data))
      localStorage.setItem('userToken',data.token)
      store.dispatch({type:item_Actions.item_Create.FIND,payload:data});
      return;
    }

     });
   })


return {type:item_Actions.item_Create.NEW,payload:'none'};

};
export function handleList(userId)
{
  alert("getOne call")
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/getOne/'+userId,{
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8',
        'Authorization':'Bearer '+localStorage.getItem('userToken')
      },
        mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log('********'+response.status);
    //  alert( JSON.stringify(data))
      //  alert(data.itemStatus);
      if(data.tokenStatus=='invalid-token'){
// item_Actions.item_Create.LOGOUT
       store.dispatch({type:"LOGOUT"});
      }
    if(data.itemStatus=='Failure') {
      store.dispatch({type:item_Actions.item_Create.FAILURE,payload:data});
      }
    else if(data.itemStatus=='created') {
      localStorage.setItem('userToken',data.token)
      store.dispatch({type:item_Actions.item_Create.FIND,payload:data});
      return;
    }
     });
   })
return {type:item_Actions.item_Create.NEW,payload:[]};

};
export function handleDel(userId)
{
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/delOne/'+userId,{
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
        mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      alert(data.todolist.length);
      console.log('********'+response.status);
    if(data.itemStatus=='Failure') {
      store.dispatch({type:item_Actions.item_Create.FAILURE,payload:data});
      }
    else if(data.itemStatus=='created') {
      store.dispatch({type:item_Actions.item_Create.FIND,payload:data});
      return;
    }
     });
   })
return {type:item_Actions.item_Create.NEW,payload:[]};

};