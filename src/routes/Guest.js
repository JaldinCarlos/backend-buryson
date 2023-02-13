import { Router } from "express";
import { GuestController } from "../controllers";

const router = Router();

router
  .route('/')
  .delete(GuestController.deleteGuest)
  .post(GuestController.createGuest)

router
  .route('/:event/event')
  .get(GuestController.getGuests)

router
  .route('/:user/user')
  .get(GuestController.getEventsOfUser)

export default router;