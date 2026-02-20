import { createUserService } from "../services/createUser.service.js";

export const createUser = async (req, res, next) => {
  try{
    const userCreatedResponse = await createUserService(req);
    res.json(userCreatedResponse);
  }
  catch(err)
  {
    next(err);
  }
}