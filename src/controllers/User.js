import { request } from "express";
import { userService } from "../services";


export const createUser = async (req = request, res, next) =>{
  try {
    const data = await userService.createUser(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const loginUser = async (req, res, next) =>{
  try {
    const data = await userService.login(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    const data = await userService.getUsers();
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const getUser = async (req, res, next) => {
  try {
    const userID = req.params.id;
    const data = await userService.getUser(userID);
    res.json(data);
  } catch (error) {
    next(error);
  }
}