import {Router}from 'express';
import { getGenresHandler} from "../Handlers/Admin/gameshandlers.js";
import {createGenreHandler}  from "../Handlers/Admin/gamePostHandler.js";
import {genreUpdaterHand} from "../Handlers/Admin/gameUpdaterHand.js";
import { delGenreHand }from'../Handlers/Admin/delGameHand.js'

import {verifyToken} from '../utils/index.js';
const genresRouter = Router();

genresRouter.get("/genres", getGenresHandler); //Protegida
genresRouter.post("/genre",  verifyToken, createGenreHandler);
genresRouter.put('/genre/:id', verifyToken, genreUpdaterHand); //Modulo genre
genresRouter.delete('/genres/:id', verifyToken, delGenreHand);

export default genresRouter;