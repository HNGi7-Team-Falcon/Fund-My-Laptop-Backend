const router = require("express").Router();
const UserCtrl = require("./../controllers/UserController");
const RoleCheck = require("../middlewares/roleMiddleware");

module.exports = () => {
     router.post("/", UserCtrl.create)
     router.post("/login", UserCtrl.login);
     router.post("/favorite", UserCtrl.favorites); // new favorite
     router.put("/update/:id", RoleCheck.rolecheck, UserCtrl.update);
     router.delete("/delete/:id", UserCtrl.delete);
     return router;
};