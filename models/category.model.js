"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function Category(sequelize) {
    class Category extends sequelize_1.Model {
        static associate(models) {
            this.belongsToMany(models.Book, {
                through: "book_category",
                foreignKey: "categoryId",
                as: "books",
            });
            this.hasMany(models.Category, {
                foreignKey: "parentId",
                as: "children",
            });
            this.belongsTo(models.Category, {
                foreignKey: "parentId",
                as: "parent",
            });
        }
    }
    Category.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        detail: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "Category",
        tableName: "category",
        timestamps: true,
    });
    return Category;
}
exports.default = Category;
