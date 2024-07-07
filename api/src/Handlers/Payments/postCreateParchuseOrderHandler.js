import postCreateParchuseOrderController  from "../../Controllers/Payments/postCreateParchuseOrderController.js";
import createOrderInDBController from "../../Controllers/Payments/createOrderInDBController.js";
import updateOrderProferenceIdController from "../../Controllers/Payments/updateOrderProferenceIdController.js";

const postCreateParchuseOrderHandler = async (req, res) => {
  const { userID, userEmail, items } = req.body;

  if(!items || items.length === 0) {
    res.status(400).json({ error: "No items attached" });
  }

  const auxItems = items.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      unitPrice: item.unit_price,
      currencyId: item.currency_id
    };
  });

  try {
    //------------------------------

    const createOrderDB = await createOrderInDBController(userID, auxItems/*JSON.stringify(auxItems)*/);
    //console.log("createOrderDB: " + JSON.stringify(createOrderDB));
    if(!createOrderDB){console.error('puede ser por la primera')}
    const orderBodyMercadoPago = await postCreateParchuseOrderController(userID, userEmail, items, createOrderDB.id.toString());
    if(!orderBodyMercadoPago){console.error('puede ser por la segunda')}
    const updateOrder = await updateOrderProferenceIdController(createOrderDB.id, orderBodyMercadoPago.id);
    if(!updateOrder){console.error('puede ser por la tercera')}
    if(updateOrder) {
      res.status(201).json({ body: orderBodyMercadoPago});
    } else {
      res.status(error.status || 500).json("Order_not_update");
    }
    
    //res.status(201).json({ body: "hi"});
    //------------------------------

    //res.status(201).json({ body: orderBody});
  } catch (error) {
    res.status(error.status||400).json({ error: error.message });
  }
}

export default postCreateParchuseOrderHandler;