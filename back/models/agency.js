const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Agency extends Model {
  static init(sequelize) {
    return super.init(
      {
        imagePath: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        companyName: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        address: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        number: {
          type: DataTypes.STRING(30),
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
        modelName: "Agency",
        tableName: "Agencys",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
