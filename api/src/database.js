import {Sequelize} from 'sequelize';
import models from './Models/index.js'

import dotenv from 'dotenv';
dotenv.config()

const {DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_DEPLOY}=process.env;


// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
// {logging: false,
// native:false}
// );


 const sequelize = new Sequelize(DB_DEPLOY, {
   logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   dialectOptions: {
    ssl: {
       require: true,
      }    
    }
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
