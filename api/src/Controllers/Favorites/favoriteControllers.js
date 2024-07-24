import {Favorite, User} from '../../database.js'
import {emptyRes} from '../../utils/index.js'

export default {
addFav : async (userId, id, name, gender,status, species, image )=>{
   
    const user = await User.findByPk(userId);
    try {
        const existingFav = await Favorite.findByPk(id);
        if(existingFav){
            const userHasFavorite = await user.hasFavorite(existingFav);

            if (userHasFavorite) {
                const fav = {}
                const error = new Error('1 Usted ya tiene ese favorito')
                 error.status = 400;
                 throw error;
            }
            try {
                const fav = await user.addFavorite(existingFav);
                return fav;
            } catch (error) {
                throw new Error('2 Error al asignar Favorito');
            }
        }else{
            try {
                const newFav = await Favorite.create({
                    id: id,
                    name: name,
                    gender: gender || 'unknown',
                    status: status || 'unknown',
                    species: species || 'unknown',
                    image
                })
                await user.addFavorite(newFav);
                const fav = newFav;
                return fav;
            } catch (error) {
                throw new Error('2 Error al crear Favorito');
            }
        }
    } catch (error) {
        throw error; 
    }
},
 getFav : async (userId)=>{
    try {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Favorite,
                    attributes: ["id", "name", "gender", "status", "species", "image"],
                    through: { attributes: [] },
                },
            ],
        });

        if (!user) {
           throw new Error('1 Usuario no encontrado.');
        }

        const favorites = user.Favorites;
        if(favorites.length===0){return emptyRes()}
        return favorites;
    } catch (error) {
       throw error;
    }
},
deleteFav : async (id, userPP)=>{
    // console.log(id + ' favorito')
    // console.log(userPP + ' usuario')
   
    try {
        const user = await User.findByPk(userPP);
        if (!user) {throw new Error(' 1 User not found.');}

        const favorite = await Favorite.findByPk(id);
        if (!favorite) {throw new Error('1 Favorite not found.');}

        await user.removeFavorite(favorite);
        return id;
        

    } catch (error) {
        throw error;
    }
}
};