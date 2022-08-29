const db = require("../models/index.js");
const { NotFoundError } = require("../shared/errors");
const Models = db.models;

const BookService = {
  async getAllBooks() {
    return await Models.Book.findAll({
      where: { deleted: false },
      include: ["uploadFiles"],
    });
  },
  async getBookById(id) {
    const category = await Models.Category.findByPk(id, {
      include: ["uploadFiles", "author", "bookDetails", "categories", "user"],
    });
    return category.deleted ? null : category;
  },

  async createBook(book) {
    return await Models.Book.create(book);
  },
  async updateBook(id, book) {
    return await Models.Book.update(book, { where: { id } });
  },
  async deleteBook(id) {
    return await Models.Book.update(
      {
        deleted: true,
      },
      { where: { id } }
    );
  },
  async getHotBooks() {
    return await Models.Book.findAll({
      where: { deleted: false, isHot: true },
      include: ["uploadFiles"],
    });
  },
  async getNewBooks() {
    return await Models.Book.findAll({
      where: { deleted: false, isNew: true },
      include: ["uploadFiles"],
    });
  },
  async getBooksByCategory(categoryId) {
    const category = await Models.Category.findByPk(categoryId, {
      include: [
        {
          model: Models.Book,
          as: "books",
          include: ["uploadFiles"],
        },
      ],
    });
    return category.Books;
  },
  //toDo:
};
module.exports = BookService;
