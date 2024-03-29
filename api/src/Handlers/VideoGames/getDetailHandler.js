import getGameById from '../../Controllers/VideoGames/gameDetailController.js'
import getRatedByItemIdController from "../../Controllers/Payments/getRatedByItemIdController.js";


const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getGameById(id);
      const ratedItem = await getRatedByItemIdController(id);

      response.rated = ratedItem;

      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
 export default getDetailHandler;