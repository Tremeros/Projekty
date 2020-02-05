const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const app = express();

//bodyParser middleware

app.use(bodyParser.json());

//DB config

// const db = require("./config/keys").mongoURI;

//Connecting mongo //

mongoose
  .connect('mongodb+srv://Pawel:fullstack@cluster0-kb2ex.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo db connected"))
  .catch(err => console.log(err));

  // Use routes

  app.use("/api/users", users)


  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log("server started on port" + port));
