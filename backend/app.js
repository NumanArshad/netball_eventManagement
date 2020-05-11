// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config = require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoController = require("./controllers/todoController.js");
const quizController = require("./controllers/QuizController.js");
const jwt = require("jsonwebtoken")
const app = express();
port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.post("/api/assigntoken", (req, res) => {
  console.log("value is ")
  console.log(req.body)
  const body=req.body  
  const user = {
    id: 1,
    username: "jahahah",
    password: "kadjf"
  }
  console.log("that data "+ body)
  jwt.sign({ user: body }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
    res.status(200).send({'good':token});
    //res.json({ token })
    // localStorage.setItem('bearer-token',token)
  })

});
app.route('/api/posts',)
.post( verifyToken, (req, res) => {
  res.json({ message: 'that' })
  // jwt.verify(req.token, 'secretkey', (err, authdata) => {
  //   if (err) {
  //     console.log("error ")
  //     res.json({ message: 'invalid token', "errortoken": err })
  //   }
  //   else {
  //     console.log("not error ")
  //     res.json({ message: 'post created', authdata })
  //   }
  // })

})
function generateToken(req, res, next) {
  const body = req.body;
  
    jwt.sign({ user: body }, 'secreykey', { expiresIn: '60s' }, (err, token) => {
      //res.json("gooood")
      req.token = token;
      next()
    })
  
}
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');

    jwt.verify(bearer[1], 'secretkey', (err, authdata) => {
      if (err) {
        console.log("error ")
        res.json({ tokenStatus: 'invalid-token', "errortoken": err })
      }
      else {
        console.log("not error ")
        jwt.sign({ user: authdata.user }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
        //  res.status(200).send({'good':token});
          //res.json({ token })
          // localStorage.setItem('bearer-token',token)
          req.token=token
          next()
        })
      //  res.json({ message: 'post created', authdata })
      }
    })
    
  }
  else {
    res.sendStatus(403)
  }

}


app
  .route("/api/Accounts/SignIn")
  .post(loginController.handleSignInAttempt)
// app
//   .route("/api/Accounts/SignInForget",)
//   .post(loginController.handleSignInForget)
app
  .route("/api/Accounts/Register")
  .post(registerController.handleRegister)

app
  .route("/api/Accounts/getAll")
  .get(loginController.getAllAccounts)
// app
//   .route("/api/Accounts/SignInForget",)
//   .post(loginController.handleSignInForget)

app
  .route("/api/Accounts/postAll")
  .post(verifyToken,todoController.postAll)
app
  .route("/api/Accounts/findAll")
  .get(todoController.findAll)
app
  .route("/api/Accounts/getOne/:userId")
  .get(verifyToken,todoController.getOne)
app
  .route("/api/Accounts/addQuestion/:courseId")
  .post(quizController.postQuestion)
app
  .route("/api/Accounts/getQuestion/:courseId")
  .get(quizController.getQuestion)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
