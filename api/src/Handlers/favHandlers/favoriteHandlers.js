import  {addFav, getFav, deleteFav} from '../../Controllers/Favorites/favoriteControllers.js'

const addFavHandler = async (req,res)=>{
    const userId = req.user.userId ;
    const {id, name, gender,status, species, image}=req.body;
    try {
        const resp = await(addFav(userId, id, name, gender,status, species, image ))
        res.status(201).json(resp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFavHandler  = async (req,res)=>{
    const userId = req.user.userId;
    try {
        const response = await(getFav(userId));
        res.status(200).json(response);
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }

};

const delfavHandler  = async (req,res)=>{
    const  userPP = req.user.userId 
    const  {id}  = req.params;
    //console.log(id + ' favorito Hand')
    //console.log(userPP + ' usuarioHand')
    try {
        const del = await(deleteFav(id, userPP));
        res.status(200).json(del);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    addFavHandler, 
    getFavHandler, 
    delfavHandler
};