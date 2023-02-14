import bcrypt from "bcryptjs";

import { GroupModel } from "../models";

/**
 * Get all groups
 */
export const getGroups = async () =>{
  try {
    return await GroupModel.findAll();
  } catch (error) {
    return error;
  }
}

/**
 * Get a group that matches with the id passed
 * @param {String} id 
 * @returns 
 */
export const getGroup = async (id) =>{
  try {
    return await GroupModel.findByPk(id);
  } catch (error) {
    return error;
  }
}

export const createGroup = async (body) => {
  try {
    const { name } = body;
    const salt = await bcrypt.genSalt();
    return await GroupModel.create({name, code: salt});
    // TODO: add method addMember to not create a group without members
  } catch (error) {
    return error;
  }
}

export const updateGroupName = async (id, body) => {
  try {
    const { name } = body;
    const group = await GroupModel.update({name}, {where: { id }, returning: true});
    return group;
  } catch (error) {
    return error;
  }
}

export const updateGroupcode = async (id) => {
  try {
    const salt = await bcrypt.genSalt();
    const group = await GroupModel.update({code: salt}, {where: { id }, returning: true});
    return group;
  } catch (error) {
    return error;
  }
}

export const deleteGroup = async (id) => {
  try {
    const group = await GroupModel.destroy({ where: { id}, returning: true});
    return group;
  } catch (error) {
    return error;
  }
}

