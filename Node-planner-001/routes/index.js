import express from "express";
const router = express.Router();
import DB from "../models/index.js";
import { Sequelize } from "sequelize";
const PL = DB.models.tbl_planner;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});
router.get("/list", async (req, res, next) => {
  const list = await PL.findAll();
  res.json(list);
});
router.get("/dateList", async (req, res, next) => {
  const list = await PL.findAll({
    attributes: [Sequelize.fn("DISTINCT", Sequelize.col("pl_date")), "pl_date"],
  });
  res.json(list);
});
export default router;
