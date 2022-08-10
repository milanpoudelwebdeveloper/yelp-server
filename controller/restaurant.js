const { RowDescriptionMessage } = require("pg-protocol/dist/messages");
const db = require("../db");
exports.getAllRestaurants = async (req, res) => {
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
      `select * from restaurants where id = ${req.params.id}`
    );
    console.log("hey restaurant detail is", rows);
    res.status(200).json({
        status: "success",
        data: rows
    })
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message: e,
    });
  }
};
