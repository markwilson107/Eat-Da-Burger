const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
          burgers: data
        };
        console.log(burgerObject)
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {

console.log('You sent, ' + req.body.burger_name);
burger.create(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });

});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
