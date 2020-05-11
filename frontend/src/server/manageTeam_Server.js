import { manageteam_Actions } from '../constants/manage_team'
import store from '../store/index'

import { ROOT_URL } from '../constants/config';


export const newTeam=(name)=>async dispatch=> {
    // return async dispatch => {
        const postRequest = await fetch(ROOT_URL + '/api/newTeam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                // 'Authorization':'Bearer '+localStorage.getItem('userToken')
            },
            mode: 'cors',
            body: JSON.stringify({ 'name': name })
        })
        const jsonResult = await postRequest.json()
        alert("result from db is " + JSON.stringify(jsonResult))
        jsonResult.teamStatus == "Get_Success" && dispatch({ type: manageteam_Actions.NEW })
    // };
}


export const joinTeam=(playerId,teamId)=>async dispatch=> {
    // return async dispatch => {
        const postRequest = await fetch(ROOT_URL + '/api/joinTeam/'+teamId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                // 'Authorization':'Bearer '+localStorage.getItem('userToken')
            },
            mode: 'cors',
            body: JSON.stringify({ 'player_id': playerId })
        })
        const jsonResult = await postRequest.json()
        // alert("result from db is " + JSON.stringify(jsonResult))
        jsonResult.teamPlayerStatus == "Get_Success" && dispatch({ type: manageteam_Actions.SHOW,payload:jsonResult.allPlayersTeams })
    // };
}


export const fetch_allPlayers_Teams=()=>async dispatch=> {
    // return async dispatch => {
        const postRequest = await fetch(ROOT_URL + '/api/allTeamsPlayers')
        const jsonResult = await postRequest.json()
        // alert("default result from db is " + JSON.stringify(jsonResult))
        jsonResult.teamPlayerStatus == "Get_Success" && dispatch({ type: manageteam_Actions.SHOW,payload:jsonResult.allPlayersTeams })
    // };
}
