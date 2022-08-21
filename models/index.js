"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const basename = path_1.default.basename(__filename);
const env = process.env.NODE_ENV || "development";
const sequelize = new sequelize_1.Sequelize({
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    logging: env === "development" ? console.log : false,
});
const models = {};
const extension = __filename.substr(__filename.lastIndexOf(".") + 1);
console.log(extension);
fs_1.default.readdirSync(__dirname)
    .filter((file) => {
    return file.includes("model." + extension);
})
    .forEach((file) => {
    const Model = require(path_1.default.join(__dirname, file)).default;
    models[Model["name"]] = Model(sequelize);
});
console.log(models);
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});
exports.db = { sequelize, models };
