import { Router } from "express";
import {getGamesAdminHandler} from "../Handlers/Admin/gameshandlers.js";
import getVideogamesHandler from "../Handlers/VideoGames/getVideogamesHandler.js";
import getDetailHandler from '../Handlers/VideoGames/getDetailHandler.js'
import {createGameHandler}  from "../Handlers/Admin/gamePostHandler.js";
import {gameUpdaterHand} from "../Handlers/Admin/gameUpdaterHand.js";
import { delGameHand}from'../Handlers/Admin/delGameHand.js'
import {verifyToken} from '../utils/index.js'
const gamesRouter = Router();

gamesRouter.get("/games", getGamesAdminHandler); //Libres
gamesRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames (Libres)
gamesRouter.get("/videogames", getVideogamesHandler);//Modulos games/videogames (Libres)
gamesRouter.post("/games",  verifyToken, createGameHandler);// Aqui cometi el error de dejarlo asi. 
gamesRouter.put("/games/:id", verifyToken, gameUpdaterHand); //Modulo games/videogames
gamesRouter.delete('/games/:id', verifyToken, delGameHand);

export default gamesRouter;