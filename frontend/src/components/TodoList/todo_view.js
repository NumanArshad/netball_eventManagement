import React, { Component } from "react";
import { connect } from "react-redux";
import CreateTodo from './todo_add';
import { item_Status } from '../../constants/addItem.js';
import { item_Actions } from '../../constants/addItem.js';
import { itemServer } from '../../server/ItemServer.js';
import { withRouter } from 'react-router-dom';
import {login_Actions} from '../../constants/Login'
import {Redirect} from 'react-router'
import store from '../../store/index'
import ValidUser_Comp from '../ValidUser_Comp'
const mapStateToProps = (state) => {
console.log("****************************state:", state);
return {
    item_status: state.todo_Reducer.item_status,
    user_todos:state.todo_Reducer.user_todos
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (item,username) => { dispatch(itemServer.handleAdd(item,username)) },
    handleList: (userId) =>{dispatch(itemServer.handleList(userId))},
  };
};
class todoView extends Component {
	constructor(props) {
      super(props);
     this.state = {todo_list:this.props.user_todos};
     this.getvalue = this.getvalue.bind(this);
    //  this.handleList= this.handleList.bind(this);
       this.callService=this.callService.bind(this);
	}
	componentWillReceiveProps(ItemsProps) {
		this.setState({todo_list:ItemsProps.user_todos})
	}
	getvalue(u){
    alert("hahaha"+u)
	  	this.props.handleAdd(u,this.props.match.params.userId)
	}
	componentWillMount() {
    // alert("will call")
		this.props.handleList(this.props.match.params.userId);
  }
  
  callService(status){

if (status=="LOGOUT"){
 alert("logout")
  // store.dispatch({type:login_Actions.login_SignIn.NEW});
return(<div>
  {/* {this.props.history.push('/')} */}
<ValidUser_Comp  />
  </div>)

}
  }

// componentDidUpdate(){
//   this.callService()
// }
  render() {
    return(
      <div>afjbge{this.callService(this.props.item_status)}</div>
 )
    // return (
    //   <CreateTodo userId={this.props.match.params.userId} getvalue={this.getvalue} handleList={this.handleList} user_todos={this.props.user_todos} />
    // );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(todoView));

// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}

