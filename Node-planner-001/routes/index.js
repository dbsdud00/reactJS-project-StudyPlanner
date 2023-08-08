import express from "express";
const router = express.Router();
import DB from "../models/index.js";
const PL = DB.models.tbl_planner;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});
router.get("/list", async (req, res, next) => {
  const list = await PL.findAll();
  res.json(list);
});
export default router;
