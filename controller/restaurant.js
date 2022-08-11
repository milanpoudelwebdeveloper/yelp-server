
const db = require("../db");

exports.getAllRestaurants = async (_, res) => {
  try {
    //here rows contains all of our data
    const { rows } = await db.query(`select * from restaurants`);
    console.log(rows);
    res.status(200).json({
      status: "success",
      results: rows.length,
      data: {
        restaurants: rows,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message: e,
    });
  }
};

exports.getRestaurantDetail = async (req, res) => {
  try {
    const { rows } = await db.query(
      //don't use string interpolation because it is vulnerable to the sql attacks
      "select * from restaurants where id = $1",
      [req.params.id]
    );
    console.log("hey restaurant detail is", rows);
    res.status(200).json({
      status: "success",
      data: rows[0],
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message: e,
    });
  }
};

exports.createNewRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  try {
    const {rows} = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    console.log(rows[0])
    res.status(200).json({
      status: "success",
      data: rows[0]
    })
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message: e,
    });
  }
};
