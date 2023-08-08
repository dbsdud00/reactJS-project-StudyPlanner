import _tbl_planner from "./tbl_planner.js";
// var _tbl_planner = require("./tbl_planner");

const initModels = (sequelize) => {
  const tbl_planner = _tbl_planner(sequelize);

  return {
    tbl_planner,
  };
};
export default initModels;
