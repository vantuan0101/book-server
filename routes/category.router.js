const categoryController = require("../controller/category.controller.js");
const Router = require("express").Router;

const categoryRouter = Router();

const path = {
  getAllCategories: "/",
  getCategoryById: "/:id",
  createCategory: "/",
  updateCategory: "/:id",
  deleteCategory: "/:id",
  addCategoryDetail: "/:id/details"
};

categoryRouter.get(path.getAllCategories, categoryController.getAllCategories);
categoryRouter.get(path.getCategoryById, categoryController.getCategoryById);
categoryRouter.post(path.createCategory, categoryController.createCategory);
categoryRouter.put(path.updateCategory, categoryController.updateCategory);
categoryRouter.delete(path.deleteCategory, categoryController.deleteCategory);

module.exports = categoryRouter;
