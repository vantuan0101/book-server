const bookController = require("../controller/book.controller");
const Router = require("express").Router;

const bookRouter = Router();

const path = {
  getAllBooks: "/",
  getHotBooks: "/hot",
  getNewBooks: "/new",
  getBookById: "/:id",
  createBook: "/",
  updateBook: "/:id",
  deleteBook: "/:id",
  getBookByCategory: "book/category/:categoryId",
};

bookController.getAllBooks(path.getAllBooks, bookController.getAllBooks);
bookController.getAllBooks(path.getHotBooks, bookController.getHotBooks);
bookController.getAllBooks(path.getNewBooks, bookController.getNewBooks);
bookController.getAllBooks(path.getBookById, bookController.getBookById);
bookController.getAllBooks(path.createBook, bookController.createBook); // auth middleware require
bookController.getAllBooks(path.updateBook, bookController.updateBook); // auth middleware require
bookController.getAllBooks(path.deleteBook, bookController.deleteBook); // auth middleware require
bookController.getAllBooks(
  path.getBookByCategory,
  bookController.getBookByCategory
);
