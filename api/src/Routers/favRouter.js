import {Router} from'express';
import {addFavHandler, getFavHandler, delfavHandler} from '../Handlers/favHandlers/favoriteHandlers.js'
import verifyToken from  '../utils/verifyToken.js'

const favRouter = Router();

favRouter.post('/favorite', verifyToken, addFavHandler);

favRouter.get('/favorite', verifyToken, getFavHandler);

favRouter.delete('/favorite/:id', verifyToken, delfavHandler)

export default favRouter;