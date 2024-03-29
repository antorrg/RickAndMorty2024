import {getUserById, getAllUser} from '../../Controllers/Users/getUserById.js'


const getUserDetailHand = async (req, res) => {
    const { id } = req.params;
    //console.log('hasta aqui el hand '+id)
    try {
      const response = await getUserById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  const getUserAllHand = async (req, res) => {
   
    //console.log('hasta aqui el hand '+id)
    try {
      const response = await getAllUser();
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  export {getUserDetailHand, getUserAllHand };