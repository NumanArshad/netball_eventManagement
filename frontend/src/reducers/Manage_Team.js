import { manageteam_Actions } from '../constants/manage_team'
import { manageteam_Status } from '../constants/manage_team'

const manageTeam_initialState = {
    manageteam_status: manageteam_Status.FETCH_PLAYERS_TEAMS,
    allTeams: [],
    allTeamPlayers: []
};

export default function (state = manageTeam_initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case manageteam_Actions.SHOW:// start fetching posts and set loading = true
            console.log("I am from Reduce New..");
            return { ...state, manageteam_status: manageteam_Status.SHOW,allTeamPlayers:action.payload };

        // case manageteam_Actions.POSTED:// start fetching posts and set loading = true
        // console.log("I am from manage_team member added success..");
        //     return { ...state, manageteam_status: manageteam_Status.SHOW };

        case manageteam_Actions.NEW:// start fetching posts and set loading = true
        console.log("I am from manage_team add new member..");
        // alert("here new")
            return { ...state, manageteam_status: manageteam_Status.NEW };

        // case manageteam_Actions.UNDERUPDATE:// start fetching posts and set loading = true
        // console.log("I am from manage_team Reducer underupdate..");
        //     //  alert(action.payload.todolist.length)
        //     return { ...state, manageteam_status: manageteam_Status.UNDERUPDATE, specific_member: {} };

        // case manageteam_Actions.UPDATED:// start fetching posts and set loading = true
        // console.log("I am from manage_team Reducer updated..");
        //     return { ...state, manageteam_status: manageteam_Status.SHOW };

        // case manageteam_Actions.DELETED:// start fetching posts and set loading = true
        //     console.log("I am from manage_team Reducer deleted..");
        //     return { ...state, manageteam_status: manageteam_Status.SHOW };

        default:
            console.log("default is firing");
            return { ...state };

    }
};
