const tasks = require('../task');

class TaskController {

   constructor() { }

   CreateTask(req, res) {
      try {
         const { name, brief } = req.body;
         const previous_length = tasks.length;
         tasks.push({
            "name": name,
            "description": brief
         });
         if (tasks.length > previous_length) {
            res.status(200).json({
               msg: 'New Task Created',
               error: null
            });
         } else {
            throw new Error('Error in creating task.');
         }

      } catch (error) {
         res.status(402).json({
            msg: null,
            error: error.message
         });
      }
   }

   GetTask(req, res) {
      try {
         if (tasks.length == 0) {
            throw new Error('No task is created yet.');
         }

         res.status(200).json({
            msg: tasks,
            error: null
         });

      } catch (error) {
         res.status(402).json({
            msg: null,
            error: error.message
         })
      }
   }
}

module.exports = TaskController