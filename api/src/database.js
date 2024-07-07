import {Sequelize} from 'sequelize';
import models from './Models/index.js'
import env from './envConfig.js'


console.log('soy la database',env.ConnectDb)

const sequelize = new Sequelize(env.ConnectDb,
{logging: false,
native:false,
dialectOptions: env.optionRender? {
      ssl: {
         require: true,
        }    
      } : {}
});




 Object.values(models).forEach((model) => model(sequelize));



const {Videogame, Genre, Platform, User, PurchaseOrder, PurchaseOrderItems, Rating, Cart, Favorite}= sequelize.models

Videogame.belongsToMany(Genre, {through: 'videogame_genre'})
Genre.belongsToMany(Videogame, {through: 'videogame_genre'})

Videogame.belongsToMany(Platform, {through: 'videogame_platform'})
Platform.belongsToMany(Videogame, {through: 'videogame_platform'})

User.belongsToMany(Favorite, {through: 'user_fav'})
Favorite.belongsToMany(User, {through: 'user_fav'})

/*User.hasMany(Rating);
Rating.belongsTo(User);

Videogame.hasMany(Rating);
Rating.belongsTo(Videogame);*/

export {
  Videogame, 
  Genre, 
  Platform, 
  User, 
  PurchaseOrder,
  PurchaseOrderItems,
  Rating,
  Cart, 
  Favorite,
    sequelize
}
