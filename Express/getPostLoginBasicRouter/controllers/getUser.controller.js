import { getUserService } from "../services/getUser.service.js";

export const getUser = async(req, res, next)=>{
    try{
        const result = await getUserService(req.body); //pass the body instead of req
        res.json(result);
    }
    catch(err){
        next(err);
    }
}