const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User

const UserSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    default: true
  },
  imie: {
    type: String,
    default: true
  },
  nazwisko: {
    type: String,
    default: true
  },
  firma: {
    type: String,
    default: true
  },
  stanowisko: {
    type: String,
    default: true
  }
})

module.exports = User = mongoose.model("user", UserSchema);
