const express = require("express");
const { getAllRestaurants, getRestaurantDetail, createNewRestaurant } = require("../controller/restaurant");

const router = express.Router();


//get all restaurants
router.get("/restaurants", getAllRestaurants)

//get single restaurant details
router.get("/restaurant/:id", getRestaurantDetail)

//create a new restaurant
router.post("/restaurant", createNewRestaurant)


module.exports=router
