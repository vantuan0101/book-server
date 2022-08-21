"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = exports.BadRequestError = exports.NotFoundError = exports.CustomError = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class CustomError extends Error {
    constructor(msg, httpStatus) {
        super(msg);
        this.HttpStatus = http_status_codes_1.default.BAD_REQUEST;
        this.HttpStatus = httpStatus;
    }
}
exports.CustomError = CustomError;
class NotFoundError extends CustomError {
    constructor(msg) {
        super(msg, http_status_codes_1.default.NOT_FOUND);
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends CustomError {
    constructor(msg) {
        super(msg, http_status_codes_1.default.BAD_REQUEST);
    }
}
exports.BadRequestError = BadRequestError;
class ConflictError extends CustomError {
    constructor(msg) {
        super(msg, http_status_codes_1.default.CONFLICT);
    }
}
exports.ConflictError = ConflictError;
