import { itemService } from "../services";

export const getItems = async (req, res, next) =>{
  try {
    const eventId = req.params.event;
    const data = await itemService.getItems(eventId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const createItem = async (req, res, next) =>{
  try {
    const data = await itemService.createItem(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const updateItem = async (req, res, next) =>{
  try {
    const id = req.params.id;
    const data = await itemService.updateItem(id, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const deleteItem = async (req, res, next) =>{
  try {
    const id = req.params.id;
    const data = await itemService.deleteItem(id, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}