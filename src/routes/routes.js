const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappcontrollers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)

module.exports = router;