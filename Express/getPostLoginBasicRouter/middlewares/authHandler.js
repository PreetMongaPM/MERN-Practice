
export const authHandler = (req, res, next)=>{
    const token = req.headers.authorization;
    if(token !== 'preet__monga'){
        res.status(401).json({message:'User Forbidden'});
    }
    next();
}