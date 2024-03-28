import {Router}from 'express';
import getRouter from './getRouter.js';
import postRouter from './postRouter.js';
import putRouter from './putRouter.js';
import delRouter from './delRouter.js';
import favRouter from './favRouter.js';



const  mainRouter=Router();

mainRouter.use('/', getRouter);

mainRouter.use('/post', postRouter);

mainRouter.use('/put',  putRouter);

mainRouter.use('/delete', delRouter);

mainRouter.use(favRouter);





export default mainRouter;