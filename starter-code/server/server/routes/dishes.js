var express = require("express");
var router = express.Router();
var Dish = require("../models/dish");

/* GET home page. */
router.get("/", function(req, res, next) {
  Dish.find({}, (err, dishes) => {
    if (err) return next(err);
    res.json(dishes);
  });
});

router.get("/:dishId", function(req, res, next) {
  const id = req.params.dishId;
  Dish.findById(id, (err, dish) => {
    if (err) return next(err);
    res.json(dish);
  });
});

router.put("/:dishId", function(req, res, next) {
  const id = req.params.dishId;

  Dish.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      image: req.body.image,
      description: req.body.description
    },
    (err, dish) => {
      if (err) return next(err);
      res.json(dish);
    }
  );
});

router.put("/", function(req, res, next) {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const dishInfo = {
    name: name,
    image: image,
    description: description
  };

  const dish = new Dish(dishInfo);

  dish.save(err => {
    if (err) return next(err);
    res.json(dish);
  });
});

module.exports = router;
