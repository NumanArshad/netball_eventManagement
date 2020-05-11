
// const mongoose = require("mongoose");

// const connectionstr =  "mongodb://localhost:27017/Login";

// const options = {
//   reconnectTries: Number.MAX_VALUE,
//   poolSize: 10
// };

// mongoose.connect(connectionstr, options).then(
//   () => {
//     console.log("Database connection established!");
//   },
//   err => {
//     console.log("Error connecting Database instance due to: ", err);
//   }
// );


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
})