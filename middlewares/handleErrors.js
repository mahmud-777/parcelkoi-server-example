import { GeneralError } from "../utils/errors"

export const handleErrors = async (err, req, res, next) => {
    const code = 500;
    if(err instanceof GeneralError){
        code = err.getCode();
        // return res.status(code).json({ name: err.name ,message: err.message});
    }
    
    let correlationId = req.headers['x-correlation-id']
    // we don't know any known error if we come into this point
    return res.status(code).json({
        // name: 'Internal Server Error', message: err.message
        correlationId: correlationId, message: err.message
    })

}