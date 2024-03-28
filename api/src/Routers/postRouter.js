import { Router } from "express";
//Importacion de funciones:
import {createGameHandler, createGenreHandler, createPlatformHandler}  from "../Handlers/Admin/gamePostHandler.js";
import {userLogHandler, loginUserHand}  from '../Handlers/Users/userLogHandler.js'
//import validateUser  from '../Handlers/Users/validateUser.js')
import postCreateParchuseOrderHandler  from "../Handlers/Payments/postCreateParchuseOrderHandler.js";
import postPaymentResultWebhookHandler from "../Handlers/Payments/postPaymentResultWebhookHandler.js";
import postUserShoppingCartHandler  from "../Handlers/Users/postUserShoppingCartHandler.js";
import postVideogamesByIdsHandler  from "../Handlers/VideoGames/postVideogamesByIdsHandler.js";
import postUserRatedHandler from "../Handlers/Payments/postUserRatedHandler.js";
//import createOrderInDBHandler  from "../Handlers/Payments/createOrderInDBHandler.js";
import verifyToken from '../utils/verifyToken.js'
import {validUserCreate, validUserLog} from "../utils/validateUsers.js"

const postRouter = Router();
//===============================================================================
postRouter.post("/",  verifyToken, createGameHandler); //Modulo game/videogame
postRouter.post("/genre",  verifyToken, createGenreHandler);
postRouter.post("/platform", verifyToken, createPlatformHandler);
postRouter.post("/user", validUserCreate, userLogHandler);
postRouter.post("/user/login", validUserLog, loginUserHand);
//Payments:
postRouter.post("/paymentResultwebhook", postPaymentResultWebhookHandler);
postRouter.post("/createParchuseOrder", verifyToken, postCreateParchuseOrderHandler);
postRouter.post("/postUserRated", verifyToken, postUserRatedHandler);
//postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);

//User Cart:
postRouter.post("/createShoppingCart", verifyToken, postUserShoppingCartHandler);

postRouter.post("/videogamesByIds", postVideogamesByIdsHandler);


export default postRouter;
