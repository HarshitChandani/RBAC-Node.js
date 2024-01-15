const express = require("express");
const TaskController = require('../controllers/TaskController');
const RbacMiddleware = require('../middlewares/RbacMiddleware');


class TaskRouter {
   router = express.Router();
   task_controller = new TaskController();

   constructor(){
      this.initializeRouter();
   }
   
   AssignRole(role = 'Admin'){
      return (req,res,next) => {
         try {
            req.user_role = role;
            next();
         } catch (error) {
            res.send({msg: null,error: error.message});
         }
      }
   }

   initializeRouter(){
      this.router.post('/create',this.AssignRole('Admin'),RbacMiddleware.checkPermission('CreateTask'),this.task_controller.CreateTask);
      this.router.get('/get-all',this.AssignRole('Anonymous'),RbacMiddleware.checkPermission('GetTask'),this.task_controller.GetTask);
   }

}

module.exports = new TaskRouter().router;