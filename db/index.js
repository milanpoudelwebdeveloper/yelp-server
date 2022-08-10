const {Pool} =require("pg")

//no need to get values from .env because the pg lib already knows to look for these values in .env
const pool = new Pool()

module.exports = {
    query: (text, params) =>pool.query(text, params)
}