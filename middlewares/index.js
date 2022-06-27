import { GeneralError, BadRequest } from "../utils/errors"
// import  processRequest  from "./processRequest";
// import  handleValidations  from "./handleValidations";
// import  handleErrors  from "./handleErrors";

export const handleError = async (err, req, res, next) => {
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

export const handleRequest = async (req, res, next) => {
    let correlationId = req.headers['x-correlation-id'];
    if(!correlationId){
        correlationId = Date.now().toString();
        req.headers['x-correlation-id'] = correlationId;
    }
    
    res.set('x-correlation-id', correlationId);
    return next();
}

export const handleValidation = (validate) => {

    return (req, res, next) => {
        const result = validate(req.body);
        const isValid = result.error == null;

        if(isValid){
            return next();
        }

        const { details } = result.error;
        const messages = details.map((e)=>  e.message )
        const msg = messages.join(',');
        // throw new Error(msg);
        throw new BadRequest(msg);
    }

}


// export const middlewares = {
//     processRequest, handleValidations, handleErrors
// };