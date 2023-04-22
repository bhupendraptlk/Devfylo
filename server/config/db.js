const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

// mongoose.Promise = global.Promise;
const db = process.env.DATABASE;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection failed");
    console.log(err);
  });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });