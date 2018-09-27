//we don't need to require the recipient model inside of index.js because we're already requiring it inside of our survey model
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;