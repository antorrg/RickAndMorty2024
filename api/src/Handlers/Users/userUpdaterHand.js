import {userUpdController, userSUpdController} from '../../Controllers/Users/userUpdController.js';



const userUpdaterHand = async(req,res)=>{
    const {id} = req.params;
    const newData = req.body;
    try {
        const response = await userUpdController(id, newData);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


const userSUpdaterHand = async(req,res)=>{
    const {id} = req.params;
    const newData = req.body;
    try {
        const response = await userSUpdController(id, newData);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export  {userUpdaterHand, userSUpdaterHand};