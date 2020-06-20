const router = require("express").Router();
const UserCtrl = require("./../controllers/UserController");
const auth = require("./../middlewares/authenticatorMiddleware")

module.exports = () => {
     router.post("/", UserCtrl.create)
     router.post("/login", UserCtrl.login);
     router.post("/favorite", auth,UserCtrl.favorites); 
     router.put("/update/:id", auth,UserCtrl.update);

     return router;
};