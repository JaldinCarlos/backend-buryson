import { request, response } from "express";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @returns 
 */
export default validateFields = (req = request, res = response, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(StatusCodes.BAD_REQUEST).json(errors);
  }
  next();
}