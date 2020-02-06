const express = require("express");
const router = express.Router();

const Contact = require("../../models/Contacts");


router.post("/", (req, res) => {
   const newContact = new Contact({
     user: req.body.user,
     name: req.body.name,
     companyName: req.body.companyName,
     nip: req.body.nip,
     regon: req.body.regon,
     phoneNumber: req.body.phoneNumber,
     email: req.body.email,
     www: req.body.www,
     date: req.body.date
   });

   newContact.save().then(contact => res.json(contact));
})

router.get("/", (req, res) => {
  Contact.find()
  // .sort({ date: -1 })
  .then(contacts => res.json(contacts));
})

router.delete("/:id", (req, res) => {
  Contact.find()
  Contact.findById(req.params.id)
  .then(contact => contact.remove().then(() => {succes: true}))
  .catch(err => res.status(404).json({succes: false}));
})


module.exports = router;
