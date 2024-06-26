import postVideogamesByIdsController from "../../Controllers/VideoGames/postVideogamesByIdsController.js";

const postVideogamesByIdsHandler = async (req, res) => {
  //const { ids } = req.query;
  const { ids } = req.body;
 //console.log("ids: " + JSON.stringify(ids));

  try {
    const videogamesData = await postVideogamesByIdsController(ids);
    //res.status(201).json(videogamesData);
    res.status(201).json(videogamesData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default postVideogamesByIdsHandler;
