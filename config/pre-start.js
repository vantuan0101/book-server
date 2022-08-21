const dotenv = require("dotenv");
dotenv.config({
  path: __dirname + "/dev.env",
});
// initialize the database connection
const db = require("../models");
console.log(db);
console.log("tao database ten: book_store_dev truoc khi chay");
db.sequelize
  .sync({ force: process.env.FORCE_DB === "true" })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });
