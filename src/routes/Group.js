import { Router } from "express";
import { body } from "express-validator";
import { GroupController } from "../controllers";
import { validateFields } from "../middlewares";
import { validationMsg, validations } from "../utils";

const router = Router();

router
  .route('/')
  .get(GroupController.getGroups)
  .post([
    body('name', validationMsg('name', validations.isEmpty, { not: true})).not().isEmpty(),
    body('name', validationMsg('name', validations.isEmail)).isString(),
    validateFields
  ],GroupController.createGroup)

router
  .route('/:id')
  .get(GroupController.getGroup)
  .delete(GroupController.deleteGroup)
  .put(GroupController.updateGroupName)

router
  .route('/:id/codegen')
  .put(GroupController.updateGroupcode)

export default router;