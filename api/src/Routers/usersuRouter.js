import { Router} from "express";
import {getUserAllHand} from "../Handlers/Users/detailUserHandler.js";
import {userSUpdaterHand} from '../Handlers/Users/userUpdaterHand.js'
import {validUserSu}  from '../utils/index.js'
const usersuRouter = Router();

usersuRouter.get("/usersu",   validUserSu , getUserAllHand) //Protegida
usersuRouter.put("/usersu/:id",   validUserSu , userSUpdaterHand) //Protegida

export default usersuRouter;