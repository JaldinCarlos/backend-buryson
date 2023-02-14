import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @returns 
 */
export const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(StatusCodes.BAD_REQUEST).json(errors);
  }
  next();
}