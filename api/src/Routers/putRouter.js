import { Router } from "express";
//Importacion de funciones:
import {gameUpdaterHand,genreUpdaterHand,platformUpdaterHand} from "../Handlers/Admin/gameUpdaterHand.js";
import {userUpdaterHand,userSUpdaterHand} from '../Handlers/Users/userUpdaterHand.js';
import verifyToken from '../utils/verifyToken.js'
import {validUserSu,verifyUsPas} from '../utils/validateUsers.js'

const putRouter = Router();
//====================================================================================
putRouter.put("/games/:id", verifyToken, gameUpdaterHand); //Modulo games/videogames
putRouter.put('/user/:id', verifyToken,  verifyUsPas, userUpdaterHand); //Modulo user
putRouter.put('/genre/:id', verifyToken, genreUpdaterHand); //Modulo genre
putRouter.put('/platform/:id', verifyToken, platformUpdaterHand); //Modulo platform
putRouter.put("/usersu/:id",   validUserSu , userSUpdaterHand) //Protegida


export default putRouter;
