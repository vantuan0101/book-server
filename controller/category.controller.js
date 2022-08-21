"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_service_1 = __importDefault(require("../service/category.service"));
const errors_1 = require("../shared/errors");
class CategoryController {
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield category_service_1.default.getAllCategories();
            res.status(200).json(categories);
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                throw new errors_1.BadRequestError("Missing id");
            }
            const category = yield category_service_1.default.getCategoryById(+id);
            if (!category) {
                throw new errors_1.NotFoundError("Category not found");
            }
            res.status(200).json(category);
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { category } = req.body;
            if (!category) {
                throw new errors_1.BadRequestError("Missing category");
            }
            const newCategory = yield category_service_1.default.createCategory(category);
            res.status(200).json(newCategory);
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { category } = req.body;
            if (!id) {
                throw new errors_1.BadRequestError("Missing id");
            }
            if (!category) {
                throw new errors_1.BadRequestError("Missing category");
            }
            category.id = +id;
            const updatedCategory = yield category_service_1.default.updateCategory(+id, category);
            res.status(200).json(updatedCategory);
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                throw new errors_1.BadRequestError("Missing id");
            }
            const deletedCategory = yield category_service_1.default.deleteCategory(+id);
            res.status(200).json(deletedCategory);
        });
    }
}
const categoryController = new CategoryController();
exports.default = categoryController;
