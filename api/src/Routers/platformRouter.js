import {Router}from 'express';
import {getPlatformHandler,} from "../Handlers/Admin/gameshandlers.js";
import {createPlatformHandler}  from "../Handlers/Admin/gamePostHandler.js";
import {platformUpdaterHand} from "../Handlers/Admin/gameUpdaterHand.js";
import {delPlatformHand}from'../Handlers/Admin/delGameHand.js'

import {verifyToken} from '../utils/index.js';
const platformRouter = Router();

platformRouter.get("/platforms", getPlatformHandler); //Protegida
platformRouter.post("/platform", verifyToken, createPlatformHandler);
platformRouter.put('/platform/:id', verifyToken, platformUpdaterHand); //Modulo platform
platformRouter.delete('/platforms/:id', verifyToken, delPlatformHand);


export default platformRouter;