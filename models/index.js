"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize").Sequelize;
const fileURLToPath = require('url').fileURLToPath;
const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  logging: env === "development" ? console.log : false,
});
const models = {
  Book: undefined

};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.includes("model.js");
  })
  .forEach((file) => {
    const Model = require(path.join(__dirname, file));
    models[Model["name"]] = Model(sequelize);
  });
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  models
}