// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config = require("./config/db");
const loginController = require("./controllers/LoginController");
const ManagePlayer_Controller = require("./controllers/ManagePlayer_Controller.js");
const manageTeam_Controller = require("./controllers/manageTeam_Controller.js");
const jwt = require("jsonwebtoken")
const app = express();
port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config.run("insert into login_tb(username,password) values('numanuet311@gmail.com','Numan441')",
// (error,insertSc)=>{
//   if(!error){
//     console.log('success insert is');
    
    
//   }
// }).get("select * from login_tb",(error,result)=>{
//   if(!error){
//     console.log("result is "+JSON.stringify(result))
//   }
// })


app.route("/api/login")
  .post(loginController.handleSignInAttempt)

// manage player////
app.route("/api/savePlayer")
  .post(verifyToken, ManagePlayer_Controller.savePlayer)

app.route("/api/allPlayers")
  .get(verifyToken,ManagePlayer_Controller.savePlayer)

app.route("/api/updatePlayer/:playerId")
  .put(ManagePlayer_Controller.savePlayer)

app.route("/api/deletePlayer/:playerId")
  .delete(ManagePlayer_Controller.savePlayer)

///////////////////////////////

///// manage team////
app.route("/api/newTeam")
  .post(manageTeam_Controller.createTeam)

app.route("/api/allTeams")
  .get(manageTeam_Controller.showTeam)

app.route("/api/newjoinTeam")
  .post(manageTeam_Controller.joinTeam)

app.route("/api/allJoinedTeams")
  .get(manageTeam_Controller.showJoinedTeam)

///////////////////////////////

//  app.post("/api/assigntoken", (req, res) => {
//   console.log("value is ")
//   console.log(req.body)
//   const body=req.body  
//   const user = {
//     id: 1,
//     username: "jahahah",
//     password: "kadjf"
//   }
//   console.log("that data "+ body)
//   jwt.sign({ user: body }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
//     res.status(200).send({'good':token});

//   })

// });
// app.route('/api/posts',)
// .post( verifyToken, (req, res) => {
//   res.json({ message: 'that' })
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    jwt.verify(bearer[1], 'secretkey', (err, authdata) => {
      if (err) {
        console.log("error ")
        res.json({ message: 'invalid token', "errortoken": err })
      }
      else {
        console.log(" token is verified ")
        jwt.sign({ user: authdata.user }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
          if (!err) {
            req.token = token
            console.log("new refresh token being issue")
            next()
          }
        })
      }
    })
  }
  else{
    console.log("undefined token")
    res.json({ message: 'undefined tokem'})
  }
}


// function generateToken(req, res, next) {
//   const body = req.body;

//     jwt.sign({ user: body }, 'secreykey', { expiresIn: '60s' }, (err, token) => {
//       //res.json("gooood")
//       req.token = token;
//       next()
//     })

// }
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(' ');

//     jwt.verify(bearer[1], 'secretkey', (err, authdata) => {
//       if (err) {
//         console.log("error ")
//         res.json({ tokenStatus: 'invalid-token', "errortoken": err })
//       }
//       else {
//         console.log("not error ")
//         jwt.sign({ user: authdata.user }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
//         //  res.status(200).send({'good':token});
//           //res.json({ token })
//           // localStorage.setItem('bearer-token',token)
//           req.token=token
//           next()
//         })
//       //  res.json({ message: 'post created', authdata })
//       }
//     })

//   }
//   else {
//     res.sendStatus(403)
//   }

// }


// app
//   .route("/api/Accounts/SignIn")
//   .post(loginController.handleSignInAttempt)
// app
//   .route("/api/Accounts/Register")
//   .post(registerController.handleRegister)

// app
//   .route("/api/Accounts/getAll")
//   .get(loginController.getAllAccounts)
// app
//   .route("/api/Accounts/postAll")
//   .post(verifyToken,todoController.postAll)
// app
//   .route("/api/Accounts/findAll")
//   .get(todoController.findAll)
// app
//   .route("/api/Accounts/getOne/:userId")
//   .get(verifyToken,todoController.getOne)
// app
//   .route("/api/Accounts/addQuestion/:courseId")
//   .post(quizController.postQuestion)
// app
//   .route("/api/Accounts/getQuestion/:courseId")
//   .get(quizController.getQuestion)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
