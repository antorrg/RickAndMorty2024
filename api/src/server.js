import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import mainRouter from './Routers/mainRouter.js';
import errorEndWare from './utils/errorEndware.js';
import validJson from './utils/validJson.js';


const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*' ); // update to match the domain you will make the request from  'http://localhost:3000'
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,  Authorization, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(express.json());
server.use(validJson);


server.use(mainRouter);

server.use(errorEndWare) // Error catching endware.


export default server;
