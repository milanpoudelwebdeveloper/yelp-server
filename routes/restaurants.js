const express = require("express");
const { getAllRestaurants, getRestaurantDetail, createNewRestaurant, updateRestaurant } = require("../controller/restaurant");

const router = express.Router();


//get all restaurants
router.get("/restaurants", getAllRestaurants)

//get single restaurant details
router.get("/restaurant/:id", getRestaurantDetail)

//create a new restaurant
router.post("/restaurant", createNewRestaurant)

//update a restaurant
router.put("/restaurant/:id", updateRestaurant)


module.exports=router
