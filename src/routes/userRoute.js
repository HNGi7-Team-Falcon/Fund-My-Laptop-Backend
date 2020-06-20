const router = require("express").Router();
const UserCtrl = require("./../controllers/UserController");
<<<<<<< HEAD
const RoleCheck = require("../middlewares/roleMiddleware");
=======
const auth = require("./../middlewares/authenticatorMiddleware")
>>>>>>> 4ef1f840fc7edf302b5fe7b7009ede4437e47803

module.exports = () => {
     router.post("/", UserCtrl.create)
     router.post("/login", UserCtrl.login);
<<<<<<< HEAD
     router.post("/favorite", UserCtrl.favorites); // new favorite
     router.put("/update/:id", RoleCheck.rolecheck, UserCtrl.update);
     router.delete("/delete/:id", UserCtrl.delete);
=======
     router.post("/favorite", auth,UserCtrl.favorites); 
     router.put("/update/:id", auth,UserCtrl.update);

>>>>>>> 4ef1f840fc7edf302b5fe7b7009ede4437e47803
     return router;
};