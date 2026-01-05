const Pool = require("pg").Pool;
require("dotenv").config();

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
console.log(process.env.DB_PASSWORD);
const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  ssl: true,
});
module.exports = pool;
