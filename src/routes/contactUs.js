const router = require("express").Router();
const {contact} = require("../controllers/contactUsController");


router.post("/contactus", contact)

module.exports =  router;
