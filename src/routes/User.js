import { Router } from "express";
import { UserController } from "../controllers";
import { body } from "express-validator";
import { validateFields, validateJwt } from "../middlewares";
import { validationMsg, validations } from "../utils";
const router = Router();


router
  .route('/login')
  .post([
    body('email', validationMsg('email', validations.isEmpty, { not: true})).not().isEmpty(),
    body('email', validationMsg('email', validations.isEmail)).isEmail(),
    body('password', validationMsg('password', validations.isEmpty)).not().isEmpty(),
    validateFields
  ],UserController.loginUser)

router
  .route('/register')
  .post([
    body('nickname', validationMsg('nickname', validations.isEmpty, { not: true})).not().isEmpty(),
    body('email', validationMsg('email', validations.isEmpty, { not: true})).not().isEmpty(),
    body('email', validationMsg('email', validations.isEmail)).isEmail(),
    body('password', validationMsg('password', validations.isEmpty, {not: true, language: 'es'})).not().isEmpty(),
    validateFields
  ],UserController.createUser)

router
  .route('/')
  .get(UserController.getAllUsers)

router
  .route('/check')
  .get(validateJwt, UserController.findByToken)

router
  .route('/:id')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)
   
export default router;  