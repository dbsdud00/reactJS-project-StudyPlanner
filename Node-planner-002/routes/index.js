import express from "express";
const router = express.Router();
import DB from "../models/index.js";
import { Sequelize } from "sequelize";
const DATE = DB.models.tbl_date;
const TODO = DB.models.tbl_todo;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});
router.get("/todo", async (req, res) => {
  let seq = req.query.seq;
  const list = await TODO.findAll({
    where: { td_dtseq: seq },
  });
  res.json(list);
});
router.get("/date/list", async (req, res, next) => {
  const list = await DATE.findAll();
  return res.json(list);
});
// router.get("/dateList", async (req, res, next) => {
//   const list = await DATE.findAll({
//     attributes: [Sequelize.fn("DISTINCT", Sequelize.col("dt_date")), "pl_date"],
//   });
//   res.json(list);
// });
export default router;
