import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_todo",
    {
      td_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      td_dtseq: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "tbl_date",
          key: "dt_seq",
        },
      },
      td_subject: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      td_content: {
        type: Sequelize.DataTypes.STRING(300),
        allowNull: false,
      },
      td_complete: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tbl_todo",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "td_seq" }],
        },
        {
          name: "F_PLANNER",
          using: "BTREE",
          fields: [{ name: "td_dtseq" }],
        },
      ],
    }
  );
};
