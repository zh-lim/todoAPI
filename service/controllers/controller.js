'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
    // id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.delete_many = function(req, res) {
  var toDelete = req.body;
  Task.deleteMany({
    _id: {$in: toDelete}
  }, function(err,task) {
    if (err)
        res.send(err);
      res.json({ message: 'Tasks successfully deleted' });
  });
};

exports.update_many = function(req, res) {
  var ids = req.body.ids;
  var toEdit = req.body.editable;
  Task.updateMany({_id: {$in: ids}}, toEdit, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
