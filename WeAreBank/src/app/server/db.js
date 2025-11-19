import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "andy1234",
  database: "wearebank4",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
