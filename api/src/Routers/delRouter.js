import {Router}from 'express';
//Importacion de funciones
import delUserHandler from '../Handlers/Users/delUserHandler.js';
import { delGameHand, delGenreHand, delPlatformHand}from'../Handlers/Admin/delGameHand.js'
import verifyToken from'../utils/verifyToken.js';
import {verifyDoNotDel} from '../utils/validateUsers.js'

const delRouter=Router();
//========================================================================
delRouter.delete('/games/:id', verifyToken, delGameHand);
delRouter.delete('/genres/:id', verifyToken, delGenreHand);
delRouter.delete('/platforms/:id', verifyToken, delPlatformHand);
delRouter.delete('/user/:id', verifyToken, verifyDoNotDel, delUserHandler);

export default delRouter;