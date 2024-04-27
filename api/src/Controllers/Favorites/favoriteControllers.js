import {Favorite, User} from '../../database.js'
import {emptyRes} from '../../utils/index.js'

const addFav = async (userId, id, name, gender,status, species, image )=>{
   
    const user = await User.findByPk(userId);
    try {
        const existingFav = await Favorite.findByPk(id);
        if(existingFav){
            const userHasFavorite = await user.hasFavorite(existingFav);

            if (userHasFavorite) {
                const fav = {};
                return  'Usted ya tiene ese favorito'
            }
            try {
                const fav = await user.addFavorite(existingFav);
                return fav;
            } catch (error) {
                throw new Error('Error al asignar Favorito');
            }
        }else{
            try {
                const newFav = await Favorite.create({
                    id,
                    name,
                    gender,
                    status,
                    species,
                    image
                })
                await user.addFavorite(newFav);
                const fav = newFav;
                console.log(fav)
                return fav;
            } catch (error) {
                throw new Error('Error al crear Favorito');
            }
        }
    } catch (error) {
        throw error; 
    }
};
const getFav = async (userId)=>{
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
           throw new Error('Usuario no encontrado.');
        }

        const favorites = user.Favorites;
        if(favorites.length===0){return emptyRes()}
        return favorites;
    } catch (error) {
        console.error(error);
        console.log('algo paso en el controller')
       throw error;
    }
};
const deleteFav = async (id, userPP)=>{
    console.log(id + ' favorito')
    console.log(userPP + ' usuario')
   
    try {
        const user = await User.findByPk(userPP);
        if (!user) {throw new Error('User not found.');}

        const favorite = await Favorite.findByPk(id);
        if (!favorite) {throw new Error('Favorite not found.');}

        await user.removeFavorite(favorite);
        return id;
        

    } catch (error) {
        throw error;
    }
};

export {
    addFav, 
    getFav, 
    deleteFav
};