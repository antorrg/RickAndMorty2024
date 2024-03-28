import { Router, request} from "express";
//Importacion de funciones.
import {getGamesAdminHandler, getGenresHandler,getPlatformHandler,} from "../Handlers/Admin/gameshandlers.js";
import getUserHandler from '../Handlers/Users/getUserHandler.js'
import getVideogamesHandler from "../Handlers/VideoGames/getVideogamesHandler.js";
import getParchuseOrderHandler from "../Handlers/Payments/getParchuseOrderHandler.js";
import getDetailHandler from '../Handlers/VideoGames/getDetailHandler.js'
import verifyToken from '../utils/verifyToken.js';
import {getUserDetailHand, getUserAllHand} from "../Handlers/Users/detailUserHandler.js";
import getUserShoppingCartHandler from "../Handlers/Users/getUserShoppingCartHandler.js";
import getOrdersByUserIdHandler  from "../Handlers/Payments/getOrdersByUserIdHandler.js";
import getRatedPendingItemsByUserIdHandler  from "../Handlers/Payments/getRatedPendingItemsByUserIdHandler.js";
import getRatedByItemIdHandler  from "../Handlers/Payments/getRatedByItemIdHandler.js";
import {validUserSu}  from '../utils/validateUsers.js'
//======================================================================================
const getRouter = Router();
getRouter.get("/videogames", getVideogamesHandler);//Modulos games/videogames (Libres)
getRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames (Libres)
getRouter.get("/genres", getGenresHandler); //Protegida
getRouter.get("/platforms", getPlatformHandler); //Protegida
getRouter.get("/games", getGamesAdminHandler); //Libres
getRouter.get("/user", verifyToken, getUserHandler) //Protegida
getRouter.get("/user/:id", verifyToken, getUserDetailHand) //Libre
//===================================================================
getRouter.get("/usersu",   validUserSu , getUserAllHand) //Protegida

//Payments:
getRouter.get("/getParchuseOrder", getParchuseOrderHandler);
getRouter.get("/success", (req, res) => res.send("success"));
getRouter.get("/failure", (req, res) => res.send("failure"));
getRouter.get("/pending", (req, res) => res.send("pending"));
getRouter.get("/getOrdersByUserId", getOrdersByUserIdHandler);
getRouter.get("/getRatedPendingItemsByUserId", getRatedPendingItemsByUserIdHandler);
getRouter.get("/getRatedByItemId/:itemID", getRatedByItemIdHandler);

getRouter.get("/getUserShoppingCart/:userID", getUserShoppingCartHandler);

export default getRouter;
