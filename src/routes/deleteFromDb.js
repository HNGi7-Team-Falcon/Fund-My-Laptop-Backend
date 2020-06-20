const router = require("express").Router();
const CustomError = require('./../utils/CustomError')
const response = require('./../utils/response')

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) throw new CustomError("There was a problem deleting the user",404)
      res.status(200).send(response("User deleted",null,"successful"));
    });
  });

module.exports = router


