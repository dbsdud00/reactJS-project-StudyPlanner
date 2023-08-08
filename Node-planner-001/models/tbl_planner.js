// const Sequelize = require('sequelize');
import Sequelize from "sequelize";
export default function (sequelize) {
  return sequelize.define(
    "tbl_planner",
    {
      pl_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      pl_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      pl_subject: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      pl_content: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
      },
      pl_complete: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_planner",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "pl_seq" }],
        },
      ],
    }
  );
}
