import { Router } from "express";
import { body } from "express-validator";

import { MemberController } from "../controllers";
import { validateFields } from "../middlewares";
import { validationMsg, validations } from "../utils";

const router = Router();

router
  .route('/')
  .delete(MemberController.deleteMember)
  .post([
    body('userId', validationMsg('userId', validations.isEmpty, { not: true})).not().isEmpty(),
    body('groupId', validationMsg('groupId', validations.isEmpty, { not: true})).not().isEmpty(),
    validateFields
  ],MemberController.createMember)

router
  .route('/:group')
  .get(MemberController.getMembersOfGroup)
  
export default router;