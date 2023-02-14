import { EventModel, GuestModel, UserModel } from "../models";

export const getGuests = async (eventId) => {
  try {
    console.log(eventId);
    return await GuestModel.findAll({
      where: {
        eventId: eventId
      },
      include:{
        model: UserModel
      }
    });
  } catch (error) {
    return error;
  }
}

export const getEventsOfUser = async (userId) => {
  try {
    return await GuestModel.findAll({
      where: {
        userId
      },
      include:{
        model: EventModel
      }
    });
  } catch (error) {
    return error;
  }
}

export const createGuest = async (userId, eventId) => {
  try {
    return await GuestModel.create({ userId, eventId});
  } catch (error) {
    return error;
  }
}

export const deleteGuest = async (userId, eventId) => {
  try {
    console.log(eventId, userId);
    return await GuestModel.destroy(
      { 
        where: { userId: userId, eventId: eventId}, 
        returning: true 
      }
    );
  } catch (error) {
    return error;
  }
}