"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function UploadFile(sequelize) {
    class UploadFile extends sequelize_1.Model {
        static associate(models) {
            this.belongsToMany(models.Book, {
                through: "book_upload",
                foreignKey: "mediaId",
                as: "books",
                otherKey: "bookId",
            });
            this.belongsTo(models.User, {
                foreignKey: "ownerId",
                as: "user",
            });
        }
    }
    UploadFile.init({
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
        thumbnail: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "UploadFile",
        tableName: "upload_file",
        timestamps: true,
    });
    return UploadFile;
}
exports.default = UploadFile;
