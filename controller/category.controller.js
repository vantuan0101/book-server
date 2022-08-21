const CategoryService = require("../service/category.service.js");
const BadRequestError = require("../shared/errors.js").BadRequestError;
const NotFoundError = require("../shared/errors.js").NotFoundError;
class CategoryController {
  async getAllCategories(req, res) {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  }

  async getCategoryById(req, res) {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    const category = await CategoryService.getCategoryById(+id);
    if (!category) {
      throw new NotFoundError("Category not found");
    }
    res.status(200).json(category);
  }

  async createCategory(req, res) {
    const { category } = req.body;
    if (!category) {
      throw new BadRequestError("Missing category");
    }
    const newCategory = await CategoryService.createCategory(category);
    res.status(200).json(newCategory);
  }

  async updateCategory(req, res) {
    const { id } = req.params;
    const { category } = req.body;
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    if (!category) {
      throw new BadRequestError("Missing category");
    }
    category.id = +id;
    const updatedCategory = await CategoryService.updateCategory(+id, category);
    res.status(200).json(updatedCategory);
  }

  async deleteCategory(req, res) {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    const deletedCategory = await CategoryService.deleteCategory(+id);
    res.status(200).json(deletedCategory);
  }
}
const categoryController = new CategoryController();
module.exports = categoryController;
