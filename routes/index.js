const express = require("express");
const categoryRouter = require("./category.router.js");

const rootRouter = express.Router();
rootRouter.use("/category", categoryRouter);

module.exports = rootRouter;
