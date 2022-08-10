const express = require("express");
const { getAllRestaurants, getRestaurantDetail } = require("../controller/restaurant");

const router = express.Router();


//get all restaurants
router.get("/restaurants", getAllRestaurants)

//get single restaurant details
router.get("/restaurant/:id", getRestaurantDetail)


module.exports=router
