import {UserModel} from '../models';

/**
 * Get all users
 */
export const getUsers = async () =>{
  try {
    return await UserModel.findAll();
  } catch (error) {
    return error;
  }
}

/**
 * Get a user that matches with the id passed
 * @param {String} id 
 * @returns 
 */
export const getUser = async (id) =>{
  try {
    return await UserModel.findByPk(id);
  } catch (error) {
    return error;
  }
}

/**
 * Create a new user
 * @param {{nickname, email, password}} body 
 * @returns 
 */
export const createUser = async (body) => {
  try {
    const { nickname, email, password } = body;
    const user = await UserModel.create({ nickname, email, password });
    const token = user.getSignedJwtToken();
    return {
      token,
      user
    }
  } catch (error) {
    return error;
  }
}

/**
 * Login a user
 * @param {{email, password}} body 
 * @returns 
 */
export const login = async (body) => {
  try {
    const { email, password } = body;

    const user = await UserModel.findOne({ where: { email } });
    if (!user) return res.json({ message: "Invalid user" });

    const isMatch = user.matchPassword(password);
    if (!isMatch) return res.json({ message: "Invalid Password" });

    const token = user.getSignedJwtToken();

    return {
      token,
      user
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * 
 * @param {uuid} id 
 * @returns 
 */
export const deleteUser = async (id) => {
  try {
    return await UserModel.destroy({where: { id }, returning: true});
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * 
 * @param {id} id 
 * @param {{nickname}} body 
 * @returns 
 */
export const updateNickname = async (id, body) => {
  try {
    const { nickname } = body;
    return await UserModel.update({nickname}, {where: { id }, returning: true});
  } catch (error) {
    console.log(error);
    return error;
  }
}