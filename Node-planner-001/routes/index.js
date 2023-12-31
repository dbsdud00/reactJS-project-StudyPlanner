import express from "express";
const router = express.Router();
import DB from "../models/index.js";
import { Sequelize } from "sequelize";
const DATE = DB.models.tbl_date;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});
router.get("/list", async (req, res, next) => {
  const list = await DATE.findAll();
  res.json(list);
});
router.get("/date/list", async (req, res, next) => {
  const list = await DATE.findAll({
    attributes: ["td_date"],
  });
  return res.json(list);
});
// router.get("/dateList", async (req, res, next) => {
//   const list = await DATE.findAll({
//     attributes: [Sequelize.fn("DISTINCT", Sequelize.col("dt_date")), "pl_date"],
//   });
//   res.json(list);
// });
export default router;
