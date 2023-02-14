import { Router } from "express";
import { body } from "express-validator";
import { GuestController } from "../controllers";
import { validateFields } from "../middlewares";
import { validationMsg, validations } from "../utils";

const router = Router();

router
  .route('/')
  .post([
    body('userId', validationMsg('userId', validations.isEmpty, { not: true})).not().isEmpty(),
    body('eventId', validationMsg('eventId', validations.isEmpty, { not: true})).not().isEmpty(),
    validateFields
  ],GuestController.createGuest)

router
  .route('/:event/:user')
  .delete(GuestController.deleteGuest)

router
  .route('/:event/event')
  .get(GuestController.getGuests)

router
  .route('/:user/user')
  .get(GuestController.getEventsOfUser)

export default router;