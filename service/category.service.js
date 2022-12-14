const db = require("../models/index.js");
const { NotFoundError } = require("../shared/errors");
const Models = db.models;

const CategoryService = {
  async getAllCategories() {
    return await Models.Category.findAll({
      where: { deleted: false },
      include: ["parent", "children"],
    });
  },
  async getCategoryById(id) {
    const category = await Models.Category.findByPk(id, {
      include: ["parent", "children"],
    });
    return category.deleted ? null : category;
  },
  async createCategory(category) {
    return await Models.Category.create(category);
  },
  async updateCategory(id, category) {
    return await Models.Category.update(category, { where: { id } });
  },
  async deleteCategory(id) {
    return await Models.Category.update(
      {
        deleted: true,
      },
      { where: { id } }
    );
  },
};
module.exports = CategoryService;
