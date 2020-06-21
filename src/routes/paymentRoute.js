/**
 * @file Contains routes for payment using card
 * @author Gabriel <gabrielsonchia@gmail.com> <18/06/2020 3:20pm>
 * @since 1.0.0
 * Last Modified: Gabriel <gabrielsonchia@gmail.com> <18/06/2020 4:00pm>
 */

const authenticate = require("../middlewares/authenticatorMiddleware");
const router = require("express").Router();
//route handlers defined in the cotroller
const {
  card_payment,
  validate_payment,
  verify_payment,
} = require("../controllers/paymentController");

//routes for making payment, validating OTP and verifying payment
router.post("/pay", authenticate, card_payment);
router.post("/validate", authenticate, validate_payment);
router.get("/verify", authenticate, verify_payment);

//exports router as a module
module.exports = router;
