import { Router } from "express";

import { MemberController } from "../controllers";

const router = Router();

router
  .route('/')
  .delete(MemberController.deleteMember)
  .post(MemberController.createMember)

router
  .route('/:group')
  .get(MemberController.getMembersOfGroup)
  
export default router;