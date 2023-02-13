import {UserModel} from '../models';
import bcrypt from 'bcryptjs';
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
    return await UserModel.create({ nickname, email, password });
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
    console.log(email, password);
    const user = await UserModel.findOne({ where: { email } });
    if (!user) return res.json({ message: "Invalid user" });
    //console.log(user);
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.json({ message: "Invalid Password" });
    console.log(isMatch);
    const token = user.getSignedJwtToken();
    console.log(token);
    return {
      token,
      user
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}