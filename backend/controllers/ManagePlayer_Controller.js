var db = require("../config/db");
const jwt = require("jsonwebtoken")

exports.savePlayer = (req, res) => {
    const { name, appearence_number, position, height } = req.body
    db.run("insert into player_tb(name,appearence_numb,position,height) values(?,?,?,?)",
        [name, appearence_number, position, height],
        (error, saveSuccess) => {
            if (!error) {
                console.log("player added success")
                this.showPlayer(req, res)
                return
            }
            console.error("error in adding in player", error)
            res.status(200).json({ playerStatus: 'Save_Failed' })
        })
}

exports.showPlayer = (req, res) => {
    db.each("select * from player_tb", (error, result) => {
        if (!error) {
            console.log("get all success")
            res.status(200).json({ playerStatus: 'Save_Success', allPlayer: result })
        }
        
    })
}

exports.editPlayer = (req, res) => {
    const {name,appearence_number,position,height}=req.body
    db.each("update from player_tb set name=?,appearence_numb=?,position=?,height=? where id=?",
    [name,appearence_number,position,height,req.params.playerId], (error, result) => {
        if (!error) {
            console.log("update success")
            this.showPlayer(req,res)
            // res.status(200).json({ playerStatus: 'Save_Success', allPlayer: result })
        }
    })
}

exports.deletePlayer = (req, res) => {
    
    db.each("delete from player_tb where id="+req.params.playerId+"", (error, result) => {
        if (!error) {
            console.log("delete success")
            this.showPlayer(req,res)
            // res.status(200).json({ playerStatus: 'Save_Success', allPlayer: result })
        }
    })
}