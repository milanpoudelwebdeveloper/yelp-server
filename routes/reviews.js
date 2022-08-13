const express=require("express");
const { getAllReviews, postReview } = require("../controller/reviews");
const router=express.Router();

router.get("/reviews/:id", getAllReviews )

router.post("/reviews/:id", postReview)

module.exports=router;