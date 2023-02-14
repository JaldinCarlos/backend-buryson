import { guestService } from "../services";


export const getGuests = async (req, res, next) => {
  try {
    const eventId = req.params.event;
    const data = await guestService.getGuests(eventId);
    res.json(data);
  } catch (error) {
    next(error);
  }
} 

export const getEventsOfUser = async (req, res, next) => {
  try {
    const userId = req.params.user;
    const data = await guestService.getEventsOfUser(userId);
    res.json(data);
  } catch (error) {
    next(error);
  }
} 

export const createGuest = async (req, res, next) => {
  try {
    const { userId, eventId } = req.body;
    const data = await guestService.createGuest(userId, eventId);
    res.json(data);
  } catch (error) {
    next(error);
  }
} 

export const deleteGuest = async (req, res, next) => {
  try {
    const eventId = req.params.event;
    const userId = req.params.user;
    
    const data = await guestService.deleteGuest(userId, eventId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}