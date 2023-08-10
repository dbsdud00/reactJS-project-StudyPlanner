import _tbl_date from "./tbl_date.js";
import _tbl_todo from "./tbl_todo.js";
const initModels = (sequelize) => {
  const tbl_date = _tbl_date(sequelize);
  const tbl_todo = _tbl_todo(sequelize);

  return {
    tbl_date,
    tbl_todo,
  };
};

export default initModels;
