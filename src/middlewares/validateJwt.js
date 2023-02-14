import jwt from "jsonwebtoken";
import { response, request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import dotenv from 'dotenv';

import { UserModel } from "../models";

dotenv.config();

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @returns 
 */
export const validateJwt = async (req = request, res = response, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json(
        { message: ReasonPhrases.UNAUTHORIZED }
    );
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET_JWT);
    req.loggedUser = await UserModel.findByPk(id);
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json(
        { message: `${ReasonPhrases.UNAUTHORIZED} | unavailable token`}
    );
  }
}