import { Router} from "express";
import getUserHandler from '../Handlers/Users/getUserHandler.js'
import {getUserDetailHand} from "../Handlers/Users/detailUserHandler.js";
import delUserHandler from '../Handlers/Users/delUserHandler.js';
import {userLogHandler, loginUserHand}  from '../Handlers/Users/userLogHandler.js'
import {userUpdaterHand} from '../Handlers/Users/userUpdaterHand.js';
import {validUserCreate, validUserLog, verifyDoNotDel, verifyUsPas, verifyToken } from "../utils/index.js"

const userRouter = Router();

userRouter.get("/user", verifyToken, getUserHandler) //Protegida
userRouter.get("/user/:id", verifyToken, getUserDetailHand) //Libre
userRouter.post("/user", validUserCreate, userLogHandler);
userRouter.post("/user/login", validUserLog, loginUserHand);
userRouter.put('/user/:id', verifyToken,  verifyUsPas, userUpdaterHand); //Modulo user
userRouter.delete('/user/:id', verifyToken, verifyDoNotDel, delUserHandler);

export default userRouter;