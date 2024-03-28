// d8888b. d88888b d8888b. db       .d88b.  db    db        .d888b.  .d88b.  .d888b.   j88D  
// 88  `8D 88'     88  `8D 88      .8P  Y8. `8b  d8'        VP  `8D .8P  88. VP  `8D  j8~88  
// 88   88 88ooooo 88oodD' 88      88    88  `8bd8'            odD' 88  d'88    odD' j8' 88  
// 88   88 88~~~~~ 88~~~   88      88    88    88    C8888D  .88'   88 d' 88  .88'   V88888D 
// 88  .8D 88.     88      88booo. `8b  d8'    88           j88.    `88  d8' j88.        88  
// Y8888D' Y88888P 88      Y88888P  `Y88P'     YP           888888D  `Y88P'  888888D     VP  
                                                                                          
                                                                                                                                                        
//-----------------------------------------------------------------------------------------

import server from "./src/server.js";
import { sequelize } from "./src/database.js";
import fillTables from "./src/Controllers/VideoGames/databaseControllers/fillTables.js";
import {appUserTable} from './src/utils/createSUs.js';
import dotenv from 'dotenv'
dotenv.config();
const { PORT } = process.env;


server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force:false});
    await fillTables();
    await appUserTable();
    console.log(`Server is running on port ${PORT} ✔️`);
  } catch (error) {
    console.error("Could not syncing with database");
  }

});
