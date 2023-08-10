import Sequelize from "sequelize";
export default function (sequelize) {
  return sequelize.define(
    "tbl_date",
    {
      td_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      td_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      td_perf: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_date",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "td_seq" }],
        },
      ],
    }
  );
}
