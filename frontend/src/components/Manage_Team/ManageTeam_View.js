import React, { Component } from "react";
import { connect } from "react-redux";
// import Login_Failure from './Login_Failure'
// import Login_Loading from './Login_loading'
// import Login_signIn from './Login_signIn'
import JoinTeam from './JoinTeam'
import CreateTeam from "./CreateTeam"
import { newTeam, joinTeam,fetch_allPlayers_Teams } from '../../server/manageTeam_Server';
import { manageteam_Actions, manageteam_Status } from '../../constants/manage_team';


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  // alert("login map called")

  return {
    manageteam_status: state.manageteam_Reducer.manageteam_status,
    allTeamPlayers:state.manageteam_Reducer.allTeamPlayers
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    saveTeam: (name) => { dispatch(newTeam(name)) },
    fetch_allPlayers_Teams: () => { dispatch(fetch_allPlayers_Teams()) },
    joinTeam: (playerId, teamId) => { dispatch(joinTeam(playerId, teamId)) },
    showPlayersTeams: () => { dispatch({ type: manageteam_Actions.SHOW }) },
    newTeam: () => { dispatch({ type: manageteam_Actions.NEW }) }
  };
};
// let count=0
class ManageTeamView extends Component {

  


  getScreen(status) {
    // alert("show")
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case manageteam_Status.FETCH_PLAYERS_TEAMS:
        return this.props.fetch_allPlayers_Teams()
        break
      case manageteam_Status.SHOW:
        return (
          <JoinTeam {...this.props} />
        );
        break;
      case manageteam_Status.NEW: //saveTeam={this.props.saveTeam} showPlayersTeams={this.props.showPlayersTeams}
        return (
          <CreateTeam  {...this.props} />
        );
        break;
      // case login_Status.FAILURE:
      //   return (
      //     <Login_Failure />
      //   );
      // break;
      // case login_Status.AUTHORIZED:
      //  this.props.history.push('/todoView/'+this.props.userId);
      //   return (
      //     <LoginSuccess handleBackClick={this.props.handleBackClick} />
      //   );
      //   break;
      //   case login_Status.NOT_AUTHORIZED:
      //     return (
      //       <Login_signIn status={status} handleSignIn={this.props.handleSignIn} />
      //     );
      //     break;
      //   case login_Status.LOADING:
      //     return (
      //       <Login_Loading />
      //     );
      //     break;
      default:
        break;
    }
  }

  render() {

    // console.log(`${++count}`)
    return (
      <div>
        {this.getScreen(this.props.manageteam_status)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeamView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
