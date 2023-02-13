import { MemberModel, UserModel } from "../models";

/**
 * Get all members of a single group
 */
export const getMembers = async (groupId) =>{
  try {
    return await MemberModel.findAll({
      where: {
        groupId
      },
      include:{
        model: UserModel
      }
    });
  } catch (error) {
    return error;
  }
}

/**
 * 
 * @param {uuid} userId 
 * @param {uuid} groupId 
 * @returns 
 */
export const createMember = async (userId, groupId) =>{
  try {
    return await MemberModel.create({ userId, groupId});
  } catch (error) {
    return error;
  }
}

/**
 * 
 * @param {uuid} userId 
 * @param {uuid} groupId 
 * @returns 
 */
export const deleteMember = async (userId, groupId) =>{
  try {
    return await MemberModel.destroy({ where: { userId, groupId}, returning: true });
  } catch (error) {
    return error;
  }
}