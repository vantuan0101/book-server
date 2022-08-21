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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const Models = models_1.db.models;
const CategoryService = {
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Models.Category.findAll();
        });
    },
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Models.Category.findByPk(id);
        });
    },
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Models.Category.create(category);
        });
    },
    updateCategory(id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Models.Category.update(category, { where: { id } });
        });
    },
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Models.Category.destroy({ where: { id } });
        });
    },
};
exports.default = CategoryService;
