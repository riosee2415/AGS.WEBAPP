const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(300),
          allowNull: false, // 필수
        },
        subTitle: {
          type: DataTypes.STRING(300),
          allowNull: false, // 필수
        },
        youtubeLink: {
          type: DataTypes.STRING(300),
          allowNull: false, // 필수
        },
        isDelete: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        modelName: "Product",
        tableName: "products",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
