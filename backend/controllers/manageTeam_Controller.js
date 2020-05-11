var db = require("../config/db");
const jwt = require("jsonwebtoken")
exports.createTeam = (req, res) => {
    const { name } = req.body
    db.run("insert into team_tb(name) values(?)",
        [name],
        (error, saveSuccess) => {
            if (!error) {
                console.log("team added success")
                this.showTeam(req, res)
                return
            }
            console.error("error in adding in player", error)
            res.status(200).json({ teamStatus: 'Save_Failed' })
        })
}


exports.showTeam = (req, res) => {
    db.all("select * from team_tb", (error, result) => {
        if (!error) {
            console.log("get all team success")
            res.status(200).json({ teamStatus: 'Get_Success', allTeams: result })
            return
        }
    })
}

exports.joinTeam = (req, res) => {
    const { player_id } = req.body
    db.run("insert into team_player_tb(player_id,team_id) values(?,?)",
        [player_id, req.params.teamId],
        (error, saveSuccess) => {
            if (!error) {
                console.log("team join success")
                this.showJoinedTeam(req, res)
                return
            }
            console.error("error in joining team  by player", error)
            res.status(200).json({ teamPlayerStatus: 'Save_Failed' })
        })
}

exports.showJoinedTeam = (req, res) => {


    db.all(`select * from team_tb INNER JOIN team_player_tb on team_tb.id=team_player_tb.team_id
    INNER JOIN player_tb on team_player_tb.player_id=player_tb.id`, (error, result) => {
        if (!error) {
            console.log("get all team join success")
            res.status(200).json({ teamPlayerStatus: 'Get_Success', allPlayersTeams: result })
            return
        }
    })
}
