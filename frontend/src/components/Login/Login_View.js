
import React, { Component } from "react";
import { connect } from "react-redux";

import Login_Failure from './Login_Failure'
import Login_Loading from './Login_loading'
import Login_signIn from './Login_signIn'
import LoginSuccess from './Login_Success'
import { loginServer } from '../../server/LoginServer';
import { login_Status } from '../../constants/Login';
import { login_Actions } from '../../constants/Login'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  // alert("login map called")
  
  return {
    login_status: state.login_Reducer.login_status,
    userId:state.login_Reducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleSignIn: (username,password) => { dispatch(loginServer.handleSignIn(username,password)) },
    handleBackClick : () =>{ dispatch({ type: login_Actions.NEW }) }
  };
};
let count=0
class LoginView extends Component {

getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case login_Status.NEW:
        return (
          <Login_signIn handleSignIn={this.props.handleSignIn} />
        );
        break;
       
      case login_Status.FAILURE:
        return (
          <Login_Failure />
        );
      break;
      case login_Status.AUTHORIZED:
       this.props.history.push('/manage_team');
        return (
          <LoginSuccess handleBackClick={this.props.handleBackClick} />
        );
        break;
        case login_Status.NOT_AUTHORIZED:
          return (
            <Login_signIn status={status} handleSignIn={this.props.handleSignIn} />
          );
          break;
        case login_Status.LOADING:
          return (
            <Login_Loading />
          );
          break;
      default:
        break;
    }
  }

  render() {
    
    console.log(`${++count}`)
    return (
      <div>
          {this.getScreen(this.props.login_status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
