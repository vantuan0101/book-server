const db = require("../models/index.js");
const { NotFoundError } = require("../shared/errors");
const { Op } = require("sequelize");
const Models = db.models;

const BookService = {
  async getAllBooks(limit, offset) {
    const query = { where: { deleted: false }, include: ["uploadFiles"] };
    if (limit) {
      query.limit = limit;
    }
    if (offset) {
      query.offset = offset;
    }
    return await Models.Book.findAndCountAll(query);
  },
  async getBookById(id) {
    const book = await Models.Book.findByPk(id, {
      include: ["uploadFiles", "author", "bookDetails", "categories", "user"],
      where: { deleted: false },
    });
    return book;
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
  async getHotBooks(limit, offset) {
    const query = {
      where: { deleted: false, isHot: true },
      include: ["uploadFiles"],
    };
    if (limit) {
      query.limit = limit;
    }
    if (offset) {
      query.offset = offset;
    }
    return await Models.Book.findAndCountAll(query);
  },
  async getNewBooks() {
    const query = {
      where: { deleted: false, isNew: true },
      include: ["uploadFiles"],
    };
    if (limit) {
      query.limit = limit;
    }
    if (offset) {
      query.offset = offset;
    }
    return await Models.Book.findAndCountAll(query);
  },
  async getBooksByCategory(categoryId) {
    //toDo: add pagination for this case
    const category = await Models.Category.findByPk(categoryId, {
      include: [
        {
          model: Models.Book,
          as: "books",
          include: ["uploadFiles"],
        },
      ],
    });
    return category.books;
  },
  //toDo: getBookByAuthor, getBookByOwnerUser
};
module.exports = BookService;
