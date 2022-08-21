"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: __dirname + "/dev.env",
});
// initialize the database connection
const models_1 = require("../models");
console.log("tao database ten: book_store_dev truoc khi chay");
models_1.db.sequelize
    .sync({ force: process.env.FORCE_DB === "true" })
    .then(() => {
    console.log("Database synced");
})
    .catch((err) => {
    console.log(err);
});
