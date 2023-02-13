import { request } from "express";
import { groupService } from "../services";


export const getGroups = async (req, res, next) =>{
  try {
    const data = await groupService.getGroups();
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const getGroup = async (req, res, next) =>{
  try {
    const groupId = req.params.id;
    const data = await groupService.getGroup(groupId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const createGroup = async (req, res, next) =>{
  try {
    const data = await groupService.createGroup(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const deleteGroup = async (req, res, next) =>{
  try {
    const groupId = req.params.id;
    const data = await groupService.deleteGroup(groupId)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const updateGroupcode = async (req = request, res, next) =>{
  try {
    const groupId = req.params.id;
    const data = await groupService.updateGroupcode(groupId)
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export const updateGroupName = async (req, res, next) =>{
  try {
    const groupId = req.params.id;
    const data = await groupService.updateGroupName(groupId, req.body)
    res.json(data);
  } catch (error) {
    next(error);
  }
}