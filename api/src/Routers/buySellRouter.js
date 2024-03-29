import { Router } from "express";
import getParchuseOrderHandler from "../Handlers/Payments/getParchuseOrderHandler.js";
import getOrdersByUserIdHandler  from "../Handlers/Payments/getOrdersByUserIdHandler.js";
import getRatedPendingItemsByUserIdHandler  from "../Handlers/Payments/getRatedPendingItemsByUserIdHandler.js";
import getRatedByItemIdHandler  from "../Handlers/Payments/getRatedByItemIdHandler.js";
import postCreateParchuseOrderHandler  from "../Handlers/Payments/postCreateParchuseOrderHandler.js";
import postPaymentResultWebhookHandler from "../Handlers/Payments/postPaymentResultWebhookHandler.js";
import postUserRatedHandler from "../Handlers/Payments/postUserRatedHandler.js";
import { verifyToken } from "../utils/index.js";

const buySellRouter = Router();

buySellRouter.get("/getParchuseOrder", getParchuseOrderHandler);
buySellRouter.get("/success", (req, res) => res.send("success"));
buySellRouter.get("/failure", (req, res) => res.send("failure"));
buySellRouter.get("/pending", (req, res) => res.send("pending"));
buySellRouter.get("/getOrdersByUserId", getOrdersByUserIdHandler);
buySellRouter.get("/getRatedPendingItemsByUserId", getRatedPendingItemsByUserIdHandler);
buySellRouter.get("/getRatedByItemId/:itemID", getRatedByItemIdHandler);
buySellRouter.post("/paymentResultwebhook", postPaymentResultWebhookHandler);
buySellRouter.post("/createParchuseOrder", verifyToken, postCreateParchuseOrderHandler);
buySellRouter.post("/postUserRated", verifyToken, postUserRatedHandler);


export default buySellRouter;