const db = require("../models/index.js");
console.log(db);
const Models = db.models;

const CategoryService = {
  async getAllCategories() {
    return await Models.Category.findAll();
  },
  async getCategoryById(id) {
    return await Models.Category.findByPk(id);
  },
  async createCategory(category) {
    return await Models.Category.create(category);
  },

  async updateCategory(id, category) {
    return await Models.Category.update(category, { where: { id } });
  },
  async deleteCategory(id) {
    return await Models.Category.destroy({ where: { id } });
  },
};
module.exports = CategoryService;
