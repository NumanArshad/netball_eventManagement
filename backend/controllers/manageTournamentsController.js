var db = require("../config/db");

exports.organizeTournament=(req,res)=>{
    const [team1,team2,tournament_date]=req.body
    db.run("insert into tournaments_tb(team1_id,team2_id,tournament_date) values(?,?,?)",
    [team1,team2,tournament_date],(error,result)=>{
        if(!error){
            console.log("organize tournament success")
            return
         
        }
        console.error("error in savingtournament is "+error);
        
    })
}

exports.showTournaments=(req,res)=>{
    db.all(`select * from tournaments_tb`,(error,result)=>{
        if(!error){
            console.log("successfully get all tournaments")
            res.status(200).json({ tournamentStatus: 'Get_Success', allTournamentss: result })
            return 
        }
    })
}