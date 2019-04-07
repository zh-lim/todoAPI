'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the task details'
  },
  // Created_date: {
  //   type: Date,
  //   default: Date.now
  // },
  completed: {
    type: Boolean,
    default: false
  },
  id: {
    type: String
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);