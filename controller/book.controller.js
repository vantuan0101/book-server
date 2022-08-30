const BookService = require("../service/book.service.js");
const { BadRequestError, NotFoundError } = require("../shared/errors.js");
class BookController {
  async getAllBooks(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = page ? page - 1 : undefined;
    const books = await BookService.getAllBooks(limit, offset);
    res.status(200).json(books);
  }
  async getHotBooks(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = page ? page - 1 : undefined;
    const hotBooks = await BookService.getHotBooks(limit, offset);
    res.status(200).json(hotBooks);
  }
  async getNewBooks(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = page ? page - 1 : undefined;
    const newBooks = await BookService.getNewBooks(limit, offset);
    res.status(200).json(newBooks);
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
  async createBook(req, res) {
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
  async updateBook(req, res) {
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
      throw new BadRequestError("Missing book");
    }
    const newBook = await BookService.updateBook(+id, book);
    res.status(200).json(newBook);
  }
  // required auth
  async deleteBook(req, res) {
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
    const { categoryId } = req.params;
    if (!categoryId) {
      throw new BadRequestError("Missing category id");
    }
    const book = await BookService.getBooksByCategory(categoryId);
    res.status(200).json(book);
  }
}
//
const bookController = new BookController();
module.exports = bookController;
