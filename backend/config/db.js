const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./config/liy_db.sqlite', (err) => {    //:memory create databse in memeory and netball any createdatabase 

  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the in-memory SQlite database.');
})
module.exports = db
// db.serialize(() => {

//   db.run(`CREATE TABLE  login_tb (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     username  TEXT NOT NULL,
//     password  TEXT NOT NULL)`, (error, sc) => {
//     if (!error) {
//       console.log("create login table success")
//       return
//     }
//     console.error("error in creating login table is " + error)
//   })

//   db.run(`CREATE TABLE  player_tb (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name  TEXT NOT NULL,
//       appearence_numb  NUMBER NOT NULL,
//       position  INTEGER NOT NULL,
//       height REAL NOT NULL)`, (error, sc) => {
//     if (!error) {
//       console.log("create lyit team table success")
//       return
//     }
//     console.error("error in creating lyit  table is " + error)
//   })

//   db.run(`CREATE TABLE  team_tb (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name  TEXT NOT NULL)`, (error, sc) => {
//     if (!error) {
//       console.log("create lyit team table success")
//       return
//     }
//     console.error("error in creating lyit  table is " + error)
//   })

// db.run(`CREATE TABLE  team_player_tb (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         player_id INTEGER NOT NULL,
//         team_id INTEGER NOT NULL,
//         FOREIGN KEY (player_id) 
//           REFERENCES player_tb (id) 
//            ON DELETE CASCADE 
//            ON UPDATE NO ACTION,
//         FOREIGN KEY (team_id) 
//           REFERENCES team_tb (id) 
//            ON DELETE CASCADE 
//            ON UPDATE NO ACTION)`, (error, sc) => {
//   if (!error) {
//     console.log("create yeam player table success")
//     return
//   }
//   console.error("error in creating lyit  table is " + error)
// })

//   // db.run(`delete from login where id='5'`,(error,res)=>{
//   //     if(!error){
//   //       console.log("delete success"+JSON.stringify(res))
//   //       return 
//   //     }
//   //     console.error("error in creating table is "+error)
//   //   })

//   // db.each(`select count(*) from  login`,(error,res)=>{
//   //   if(!error){
//   //     console.log("all success"+JSON.stringify(res))
//   //     return 
//   //   }
//   //   console.error("error in creating table is "+error)
//   // })
// })

// db.run(`CREATE TABLE  tournaments_tb (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           team1_id INTEGER NOT NULL,
//           team2_id INTEGER NOT NULL,
//           tournament_date TEXT NOT NULL,
//           FOREIGN KEY (team1_id) 
//           REFERENCES team_tb (id) 
//            ON DELETE CASCADE 
//            ON UPDATE NO ACTION,
//           FOREIGN KEY (team2_id) 
//             REFERENCES team_tb (id) 
//              ON DELETE CASCADE 
//              ON UPDATE NO ACTION)`, (error, sc) => {
//   if (!error) {
//     console.log("create yeam player table success")
//     return
//   }
//   console.error("error in creating lyit  table is " + error)
// })
