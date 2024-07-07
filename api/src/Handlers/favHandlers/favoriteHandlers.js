import favContr from '../../Controllers/Favorites/favoriteControllers.js'

export default {
 addFavHandler : async (req,res)=>{
    const userId = req.user.userId ;
    const {id, name, gender,status, species, image}=req.body;
    try {
        const resp = await favContr.addFav(userId, id, name, gender,status, species, image )
        res.status(201).json(resp);
    } catch (error) {
        if(error.message.includes('1')){
            res.status(404).json({error:error.message})
        }else if(error.message.includes('2')){
            res.status(400).json({error:error.message})
        
        }else{
            res.status(500).json({error: error.message})}
    }
},

 getFavHandler  : async (req,res)=>{
    const userId = req.user.userId;
    try {
        const response = await favContr.getFav(userId);
        res.status(200).json(response);
    } catch (error) {
        if(error.message.includes('1')){
            res.status(404).json({error:error.message})
        }else if(error.message.includes('2')){
            res.status(400).json({error:error.message})
        
        }else{
            res.status(500).json({error: error.message})}
    }

},

 delfavHandler  : async (req,res)=>{
    const  userPP = req.user.userId 
    const  {id}  = req.params;
    //console.log(id + ' favorito Hand')
    //console.log(userPP + ' usuarioHand')
    try {
        const del = await favContr.deleteFav(id, userPP);
        res.status(200).json(del);
    } catch (error) {
        if(error.message.includes('1')){
            res.status(404).json({error:error.message})
        }else if(error.message.includes('2')){
            res.status(400).json({error:error.message})
        
        }else{
            res.status(500).json({error: error.message})}
    }
},
};
// export {
//     addFavHandler, 
//     getFavHandler, 
//     delfavHandler
// };