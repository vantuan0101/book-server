"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_controller_1 = __importDefault(require("../controller/category.controller"));
const express_1 = require("express");
const categoryRouter = (0, express_1.Router)();
const path = {
    getAllCategories: "/",
    getCategoryById: "/:id",
    createCategory: "/",
    updateCategory: "/:id",
    deleteCategory: "/:id",
};
categoryRouter.get(path.getAllCategories, category_controller_1.default.getAllCategories);
categoryRouter.get(path.getCategoryById, category_controller_1.default.getCategoryById);
categoryRouter.post(path.createCategory, category_controller_1.default.createCategory);
categoryRouter.put(path.updateCategory, category_controller_1.default.updateCategory);
categoryRouter.delete(path.deleteCategory, category_controller_1.default.deleteCategory);
exports.default = categoryRouter;
