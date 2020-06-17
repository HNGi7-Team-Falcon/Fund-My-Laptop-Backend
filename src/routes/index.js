const router = require("express").Router();


router.get("/test", (req, res) => res.send("Yeah it works!"));

module.exports = router


