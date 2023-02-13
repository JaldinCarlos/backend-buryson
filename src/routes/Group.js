import { Router } from "express";
import { GroupController } from "../controllers";

const router = Router();

router
  .route('/')
  .get(GroupController.getGroups)
  .post(GroupController.createGroup)

router
  .route('/:id')
  .get(GroupController.getGroup)
  .delete(GroupController.deleteGroup)
  .put(GroupController.updateGroupName)

router
  .route('/:id/codegen')
  .put(GroupController.updateGroupcode)

export default router;