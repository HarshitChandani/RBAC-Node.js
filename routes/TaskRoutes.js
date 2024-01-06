const express = require("express");
const TaskController = require('../controllers/TaskController');
const RbacMiddleware = require('../middlewares/RbacMiddleware');

const route = express.Router();

function AssignRole(role = 'Admin'){
   return (req,res,next) => {
      try {
         req.user_role = role;
         next();
      } catch (error) {
         res.send({msg: null,error: error.message});
      }
   }
}

route.post('/create',AssignRole('Admin'),RbacMiddleware.checkPermission('CreateTask'),TaskController.CreateTask);
route.get('/get-all',AssignRole('Anonymous'),RbacMiddleware.checkPermission('GetTask'),TaskController.GetAllTask);

module.exports = route;