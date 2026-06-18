export const asyncHandler = (fn)=>{
    return (req, res, next)=> Promise.resolve(fn(req, res, next)).catch(next);
}


//why catch next - to send the erro