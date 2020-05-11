var db = require("../config/db");
const jwt = require("jsonwebtoken")

exports.handleSignInAttempt = (req, res) => {
  const { username, password } = req.body
  db.get("select * from login_tb where username=? AND password=?", [username, password],
    (error, account) => {
      if (error) {
        console.log("Error in Server " + account)
        res.status(500).send({ 'signInStatus': 'failure', 'err': err })
      }
      if (account != null || account != undefined) {
        console.log("Account found")
        jwt.sign({ user: req.body }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
          const userDetail = { userId: account.id, token: token }
          res.status(200).send({ 'signInStatus': 'authorized', 'userDetail': userDetail });
        })
      }
      else {
        console.log("Account not found")
        res.status(200).send({ 'signInStatus': 'not_authorized' });
      }
    })
}
