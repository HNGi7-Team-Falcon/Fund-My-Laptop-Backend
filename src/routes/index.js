const router = require("express").Router();

const {login} = require("./../controllers/userController");


router.get("/test", (req, res) => res.send("Yeah it works!"));











router.post("/login",login);

module.exports = router


