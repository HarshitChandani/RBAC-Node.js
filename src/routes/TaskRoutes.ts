import * as express from 'express';
import TaskController from '../controllers/TaskController';

class TaskRouter {
   router = express.Router();
   task_controller = new TaskController();
   
   constructor() {
      this.initializeRouter();
   };

   AssginRole(role:String = 'Admin') {
      return (req: Request,res: Response,next: express.NextFunction) => {
         try {
            req.user_role = role;
            next();
         } catch (error: any) {
            res.send({msg: null,error: error.message});
         }
      }
   }

   initializeRouter() {
      this.router.post('/create',this.task_controller.CreateTask);
      this.router.get('/get-all',this.task_controller.GetTask);
   }
}
