import express from 'express';
import {  infoLogger} from "./logger"
import configure from './controllers';
import { handleRequest, handleError } from './middlewares/index';

import dotenv from 'dotenv';
dotenv.config();

// const PORT = 3001;
const app = express();

//  console.log(process.env.username);
//  console.log(process.env.node);
// console.log(process.env.ENVIRONMENT);

app.use(express.json());

// Middleware

app.use(handleRequest);
// const log = (msg) => console.log(msg);
// connectWithDb();

if(process.env.ENVIRONMENT != 'TEST')
   app.use(infoLogger);

configure(app);

// if(process.env.ENVIRONMENT != 'TEST')
//    app.use(errorLogger(uri));

app.use(handleError);

export default app;