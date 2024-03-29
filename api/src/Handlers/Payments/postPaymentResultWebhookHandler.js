import updateOrderStatusController from "../../Controllers/Payments/updateOrderStatusController.js";
import SendMailPurchaseResult from"../../nodemailer/SendEmailPurchaseResult.js";
import postUserShoppingCartController from"../../Controllers/Users/postUserShoppingCartController.js";
import mercadopago from "mercadopago";

const postPaymentResultWebhookHandler = async (req, res) => {
  
  console.log("PAYMENT_RESULT: " + JSON.stringify(req.query));
  const payment = req.query;

  try {
    if(payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      const arrayReferenceData = data.body.external_reference.split("-_");
      const updateOrderDB = await updateOrderStatusController(parseInt(arrayReferenceData[0]), data.body.status, data.body.status_detail, data.body.id.toString());
      //const updateOrderDB = await updateOrderStatusController(parseInt(data.body.external_reference), data.body.status, data.body.status_detail, data.body.id.toString());
      if(data.body.status === "approved") {
        //console.log("arrayReferenceData[2]: " + arrayReferenceData[2]);
        await postUserShoppingCartController(arrayReferenceData[2], []);
      }
      //console.log("Email: " + arrayReferenceData[1]);
      await SendMailPurchaseResult(arrayReferenceData[1], data.body.status, data.body.additional_info.items);
      //console.log("updateOrderDB: " + updateOrderDB);
      //const updateOrderResult = putParchuseOrderStatusController();
      //console.log("data: " + JSON.stringify(data));
      //console.log(data);
    }
    res.status(201).json({ result: "Resultado del pago" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default postPaymentResultWebhookHandler;