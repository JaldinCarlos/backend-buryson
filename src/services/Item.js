import { ItemModel } from "../models";

export const getItems = async (eventId) => {
  try {
    return await ItemModel.findAll({
      where: {
        eventId
      },
      include:{
        model: UserModel
      }
    });
  } catch (error) {
    return error;
  }
}

export const createItem = async (body) => {
  try {
    return await ItemModel.create(body);
  } catch (error) {
    return error;
  }
}

export const updateItem = async (id, body) => {
  try {
    return await ItemModel.update({
      body,
      where: {
        id
      },
      include:{
        model: UserModel
      }
    });
  } catch (error) {
    return error;
  }
}

export const deleteItem = async (id) => {
  try {
    return await ItemModel.destroy({
      where: {
        id
      },
      include:{
        model: UserModel
      }
    });
  } catch (error) {
    return error;
  }
}