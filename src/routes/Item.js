import { Router } from "express";
import { body } from "express-validator";
import { ItemController } from "../controllers";
import { validationMsg, validations } from "../utils";

const router = Router();

router
  .route('/:event/event')
  .get(ItemController.getItems);

router
  .route('/')
  .post([
    body('price', validationMsg('price', validations.isEmpty, { not: true})).not().isEmpty(),
    body('price', validationMsg('price', validations.isNumber)).isNumeric(),
    body('name', validationMsg('name', validations.isEmpty, { not: true})).not().isEmpty(),
    body('details', validationMsg('details', validations.isEmpty, { not: true})).not().isEmpty(),
  ],ItemController.createItem);

router
  .route('/:id')
  .put(ItemController.updateItem)
  .delete(ItemController.deleteItem);


export default router;