import { Router } from "express";
import getUserShoppingCartHandler from "../Handlers/Users/getUserShoppingCartHandler.js";
import postUserShoppingCartHandler  from "../Handlers/Users/postUserShoppingCartHandler.js";
import postVideogamesByIdsHandler  from "../Handlers/VideoGames/postVideogamesByIdsHandler.js";
import {verifyToken} from '../utils/index.js'

const cartRouter = Router();

cartRouter.get("/getUserShoppingCart/:userID", getUserShoppingCartHandler);
cartRouter.post("/createShoppingCart", verifyToken, postUserShoppingCartHandler);
cartRouter.post("/videogamesByIds", postVideogamesByIdsHandler);

export default cartRouter;