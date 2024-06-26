import {gameDelete, genreDelete, platformDelete} from "../../Controllers/VideoGames/AdminControllers/gameDelController.js";

const delGameHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await gameDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delGenreHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await genreDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delPlatformHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await platformDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  delGameHand,
  delGenreHand,
  delPlatformHand
};
