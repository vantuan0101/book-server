const BookService = require("../service/book.service.js");
const { BadRequestError, NotFoundError } = require("../shared/errors.js");
class BookController {
  async getAllBooks(req, res) {
    const books = await BookService.getAllBooks;
    res.status(200).json(books);
  }
  //get ../books/id
  async getBookById(req, res) {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    const book = await BookService.getBookById(+id);
    if (!book) {
      throw new NotFoundError("Book not found");
    }
    res.status(200).json(book);
  }
  // required auth
  async createCategory(req, res) {
    const { book } = req.body;
    /* 
      //toDo: getUserOwner from middleware
      const user = ...
      book.ownerId = user.id
    */
    if (!book) {
      throw new BadRequestError("Missing book");
    }
    const newBook = await BookService.createBook(book);
    res.status(200).json(newBook);
  }

  // required auth
  async updateCategory(req, res) {
    const { id } = req.params;
    const { book } = req.body;
    /* 
      //toDo: getUserOwner from middleware
      const user = ...
      check if belong to user
    */
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    if (!book) {
      throw new BadRequestError("Missing category");
    }
    const newBook = await BookService.updateBook(+id, category);
    res.status(200).json(newBook);
  }
  // required auth
  async deleteCategory(req, res) {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Missing id");
    }
    /* 
      //toDo: getUserOwner from middleware
      const user = ...
      check if belong to user
    */

    await BookService.deleteBook(+id);
    res.status(200);
  }
  // .../books/category/id
  async getBooksByCategoryId() {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError("Missing category id");
    }
    const book = await BookService.getBooksByCategory(id);
    res.status(200).json(book);
  }
}
//
const bookController = new BookController();
module.exports = bookController;
