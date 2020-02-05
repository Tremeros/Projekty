const express = require("express");
const router = express.Router();

// User Model

const User = require("../../models/User");

// @route GET api/users
// @desc  Get All users
// @sccess Public

router.post("/", (req, res) => {
   const newUser = new User({
     login: req.body.login,
     password: req.body.password,
     imie: req.body.imie,
     nazwisko: req.body.nazwisko,
     firma: req.body.firma,
     stanowisko: req.body.stanowisko
   });

   newUser.save().then(user => res.json(user));
})

// @route POST api/users
// @desc  Create a user
// @sccess Public

router.get("/", (req, res) => {
  User.find()
  // .sort({ date: -1 })
  .then(users => res.json(users));
})

// @route DELETE api/users/:id
// @desc  Delete a user
// @sccess Public

router.delete("/:id", (req, res) => {
  User.find()
  User.findById(req.params.id)
  .then(user => user.remove().then(() => {succes: true}))
  .catch(err => res.status(404).json({succes: false}));
})


module.exports = router;
