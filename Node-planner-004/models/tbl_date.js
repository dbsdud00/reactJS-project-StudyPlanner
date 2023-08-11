import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_date",
    {
      dt_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      dt_date: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      dt_perf: {
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
          fields: [{ name: "dt_seq" }],
        },
      ],
    }
  );
};
