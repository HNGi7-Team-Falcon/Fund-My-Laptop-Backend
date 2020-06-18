const router = require("express").Router();



router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: "+ user.name +" was deleted.");
    });
  });

module.exports = router


