
import React, { Component } from "react";
import { connect } from "react-redux";

import Create_Failure from './Create_Failure'
import Create_Loading from './Create_Loading'
import Register from './Create_Register'
import Create_Success from './Create_Success'
import { registerServer } from '../../server/RegisterServer';
import { register_Status } from '../../constants/Register';
import { register_Actions } from '../../constants/Register';
import Login_signIn from '../Login/Login_View'
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    register_status: state.register_Reducer.register_status,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleRegister: (username,password) => { dispatch(registerServer.handleRegister(username,password)) },
    handleBackClick : () => { dispatch({ type: register_Actions.NEW }) }
  };
};

class CreateView extends Component {
  constructor(props) {
      super(props);
     this.state = {};
     this.handleRegister = this.handleRegister.bind(this);

  }

handleRegister(u,p){
  this.props.handleRegister(u,p)
}
  getScreen(status) {
    console.log("I am from register Component getScreen: " + status);
    switch (status) {
      case register_Status.NEW:
        return (
          <Register handleRegister={this.handleRegister}  />
        );
        break;
      case register_Status.FAILURE:
        return (
          <Create_Failure handleBackClick={this.props.handleBackClick} />
        );
      break;
      case register_Status.SUCCESS:
        return (
          <Create_Success />
        );
        break;
        case register_Status.LOADING:
          return (
            <Create_Loading />
          );
          break;
          case register_Status.EXISTING:
            return (
              <Register status={status}  handleRegister={this.handleRegister}/>
            );
            break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.register_status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
