import { Router } from "express";
import { body } from "express-validator";

import { EventCotroller } from "../controllers";
import { validateFields } from "../middlewares";
import { validationMsg, validations } from "../utils";

const router = Router();

router  
  .route('/')
  .post([
    body('name', validationMsg('name', validations.isEmpty, { not: true})).not().isEmpty(),
    body('event_date', validationMsg('event_date', validations.isEmpty, { not: true})).not().isEmpty(),
    body('event_date', validationMsg('event_date', validations.isDate )).isDate(),
    body('location_link', validationMsg('location_link', validations.isEmpty, { not: true})).not().isEmpty(),
    body('groupId', validationMsg('groupId', validations.isEmpty, { not: true})).not().isEmpty(),
    validateFields
  ],EventCotroller.createEvent)

router
  .route('/:event')
  .get(EventCotroller.getEvent)
  .put(EventCotroller.updateEvent)
  .delete(EventCotroller.deleteEvent);

router
  .route('/:group/group')
  .get(EventCotroller.getEventsOfGroup);

export default router;