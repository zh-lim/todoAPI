'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

  // todoList Routes
  app.route('/api/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .put(todoList.update_many)
    .delete(todoList.delete_many);


  app.route('/api/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};