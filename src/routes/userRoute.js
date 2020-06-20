const router = require("express").Router();
const UserCtrl = require("./../controllers/UserController");
const RoleCheck = require("../middlewares/roleMiddleware");

module.exports = () => {
     router.post("/", UserCtrl.create)
     router.post("/login", UserCtrl.login);
     router.post("/favorite", UserCtrl.favorites); // new favorite
<<<<<<< HEAD
     router.put("/update/:id", RoleCheck.rolecheck, UserCtrl.update);
     router.delete("/delete/:id", UserCtrl.delete);
=======
     router.put("/update/:id", UserCtrl.update);

>>>>>>> 2099d384d17e6d193d94c96c50e8df63ec1c054f
     return router;
};