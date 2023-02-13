import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();


router
  .route('/login')
  .post(UserController.loginUser)

router
  .route('/register')
  .post(UserController.createUser)

router
  .route('/')
  .get(UserController.getAllUsers)

router
  .route('/check')
  .get(UserController.findByToken)

router
  .route('/:id')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)
   
export default router;