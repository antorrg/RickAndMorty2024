import getRatedByItemIdController from "../../Controllers/Payments/getRatedByItemIdController.js";

const getRatedByItemIdHandler = async (req, res) => {
  const  { itemID }  = req.params;

  console.log("itemID::: " + itemID);

  try {
    const response = await getRatedByItemIdController(itemID);
    res.status(200).json(response);
    //res.status(200).json({res: "OK"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getRatedByItemIdHandler;