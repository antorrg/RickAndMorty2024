import getOrdersByUserIdController from "../../Controllers/Payments/getOrdersByUserIdController.js";
import { Op } from "sequelize";
//Se recibe por param tanto el "collection_id/payment_id" como "external_reference"

const getPurchaseOrderByIdHandler = async (req, res) => {
    //const  { userID }  = req.params;
    const { userID, page = 0, size = 5, status } = req.query;
    //console.log("userID: " + userID);
    //console.log("external_reference: " + external_reference);

    /*console.log("userID :: " + userID);
    console.log("page :: " + page);
    console.log("size :: " + size);*/

    let filters = {
      userId: userID
    };

    if(status) {
      filters.status = status;
    } else {
      filters.status = {
        [Op.ne]: 'waiting'
      };
    }
  
    try {
      const ordersData = await getOrdersByUserIdController(filters, page, size);
      res.status(201).json(ordersData);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
 export default getPurchaseOrderByIdHandler;