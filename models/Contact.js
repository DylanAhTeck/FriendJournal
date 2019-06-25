const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  },

  //Added for OWN ADDITIONS
  level: {
    type: String
  },
  comment: {
    type: String
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
