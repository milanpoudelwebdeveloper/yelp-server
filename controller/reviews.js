const db = require("../db");
//get all reviews of a restaurant

exports.getAllReviews = async (req,res) => {
  console.log(req.params.id)
  try {
    const { rows } = await db.query(
      "SELECT * FROM reviews WHERE restaurant_id=$1",
      [req.params.id]
    );
    res.json({
      status: "success",
      reviews: rows,
    });
  } catch (e) {
    console.log(e);
    res.json({
      status: "error",
      message: e,
    });
  }
};

exports.postReview = async (req,res) => {
  const { name, rating, review} = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) returning *",
      [req.params.id, name, review, rating]
    );
    res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message: e,
    });
  }
};
