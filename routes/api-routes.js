// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);

      // var hbsObject = {
      // burgers: data
      // };
      // res.render("index", hbsObject);

      // res.render("index", dbBurger);

      // res.render(dbBurger);
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: 0
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  app.put("/", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });
};