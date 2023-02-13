import { Router } from "express";
import { ItemController } from "../controllers";

const router = Router();

router
  .route('/:event/event')
  .get(ItemController.getItems);

router
  .route('/')
  .post(ItemController.createItem);

router
  .route('/:id')
  .put(ItemController.updateItem)
  .delete(ItemController.deleteItem);


export default router;