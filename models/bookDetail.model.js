"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function BookDetail(sequelize) {
    class BookDetail extends sequelize_1.Model {
        static associate(models) {
            BookDetail.belongsTo(models.Book, {
                foreignKey: "bookId",
                as: "book",
            });
        }
    }
    BookDetail.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "BookDetail",
        tableName: "bookDetail",
        timestamps: true,
    });
    return BookDetail;
}
exports.default = BookDetail;
