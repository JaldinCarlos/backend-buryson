import { EventModel } from "../models";

/**
 * Get all groups
 */
export const getEvents = async (id) =>{
  try {
    return await EventModel.findAll({
      where: { groupId: id}
    });
  } catch (error) {
    return error;
  }
}

export const getEvent = async (id) =>{
  try {
    return await EventModel.findOne({where: {id}});
  } catch (error) {
    return error;
  }
}

export const createEvent = async (body) =>{
  try {
    return await EventModel.create(body);
  } catch (error) {
    return error;
  }
}

export const updateEvent = async (id, body) =>{
  try {
    return await EventModel.update({
      body,
      where: {id},
      returning: true
    });
  } catch (error) {
    return error;
  }
}

export const deleteEvent = async (id) =>{
  try {
    return await EventModel.destroy({
      where: { id }
    });
  } catch (error) {
    return error;
  }
}