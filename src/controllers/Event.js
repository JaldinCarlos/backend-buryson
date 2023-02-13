import { eventService } from "../services";

export const getEventsOfGroup = async (req, res, next) =>{
  try {
    const data = await eventService.getEvents(req.params.id)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const getEvent = async (req, res, next) => {
  try {
    const data = await eventService.getEvent(req.params.id)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const createEvent = async (req, res, next) => {
  try {
    const data = await eventService.createEvent(req.body)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const updateEvent = async (req, res, next) => {
  try {
    const data = await eventService.updateEvent(req.params.id, req.body)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const deleteEvent = async (req, res, next) => {
  try {
    const data = await eventService.deleteEvent(req.params.id)
    res.json(data);
  } catch (error) {
    next(error);
  }
}