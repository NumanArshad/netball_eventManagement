import React from 'react'
import {login_Actions} from '../constants/Login'
import store from '../store/index'
import {Redirect} from 'react-router'
import { useHistory } from "react-router-dom";
export default function(){
// let history=useHistory().push('/')
    alert("got it")
store.dispatch({type:login_Actions.login_SignIn.NEW})
return <div><Redirect to='/'/></div>
}
