const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: true
  },
  companyName: {
    type: String,
    default: true
  },
  nip: {
    type: String,
    default: true
  },
  regon: {
    type: String,
    default: true
  },
  phoneNumber: {
    type: String,
    default: true
  },
  email: {
    type: String,
    default: true
  },
  www: {
    type: String,
    default: true
  },
date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Contact = mongoose.model("contact", ContactSchema);
