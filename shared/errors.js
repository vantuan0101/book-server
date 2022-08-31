const HttpStatusCodes = require("http-status-codes");

class CustomError extends Error {
  HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg, httpStatus) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

class NotFoundError extends CustomError {
  constructor(msg) {
    super(msg, HttpStatusCodes.NOT_FOUND);
  }
}
class BadRequestError extends CustomError {
  constructor(msg) {
    super(msg, HttpStatusCodes.BAD_REQUEST);
  }
}
class ConflictError extends CustomError {
  constructor(msg) {
    super(msg, HttpStatusCodes.CONFLICT);
  }
}

module.exports = {
  CustomError,
  NotFoundError,
  BadRequestError,
  ConflictError,
};