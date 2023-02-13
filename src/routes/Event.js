import { Router } from "express";
import { EventCotroller } from "../controllers";

const router = Router();

router
  .route('/:event')
  .get(EventCotroller.getEvent)
  .post(EventCotroller.createEvent)
  .put(EventCotroller.updateEvent)
  .delete(EventCotroller.deleteEvent);

router
  .route('/:group/group')
  .get(EventCotroller.getEventsOfGroup);

export default router;