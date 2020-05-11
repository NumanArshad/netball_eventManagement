import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ROOT_URL } from "../../constants/config";
class JoinTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTeams: [], allPlayers: [], playerId: 0, teamId: 0
        }

    }
    async componentWillMount() {

        const fetchAllTeams = await fetch(ROOT_URL + "/api/allTeams")
        const fetchAllPlayers = await fetch(ROOT_URL + "/api/allPlayers")

        const teamResult = await fetchAllTeams.json()
        teamResult.teamStatus == "Get_Success" && this.setState({ allTeams: teamResult.allTeams })

        const playerResult = await fetchAllPlayers.json()
        playerResult.playerStatus === "Get_Success" && this.setState({ allPlayers: playerResult.allPlayers })
    }



    render() {
        const { allPlayers, allTeams, playerId, teamId } = this.state
        return (
            <div>
                <h1>You have been logged in successfully {playerId > 0 && playerId}</h1>
                <input type="datetime-local" onChange={(event)=>alert(typeof(event.target.value))}/>
                {JSON.stringify(this.props.allTeamPlayers)}
                {/* {JSON.stringify(allPlayers)}
<br />
                {JSON.stringify(allTeams)} */}
                <label>Select Player</label>
                <select onChange={(event) => this.setState({ playerId: event.target.value })}>
                <option >select player </option>
                    {allPlayers.map((player) => {
                        return <option value={player.id} key={player.id}>{player.name}</option>
                    })}
                </select>

                <label>Select Team</label>
                <select onChange={(event) => this.setState({ teamId: event.target.value })}>
                <option >select player </option>
                    {allTeams.map((team) => {
                        return <option value={team.id} key={team.id}>{team.name}</option>
                    })}
                </select>

                <button onClick={() => this.props.joinTeam(this.state.playerId, this.state.teamId)}>join Team</button>
                <button onClick={() => this.props.newTeam()}>New Team</button>
                {/* <button onClick={this.handleClick}>Back</button> */}
            </div>
        );
    }
}



export default JoinTeam;
