import express from "express";
const router = express.Router();
import DB from "../models/index.js";
import { Sequelize } from "sequelize";
// const DATE = DB.models.tbl_date;
// const TODO = DB.models.tbl_todo;
const { tbl_date: DATE, tbl_todo: TODO } = DB.models;

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
router.get("/date", async (req, res, next) => {
  let seq = req.query.seq;
  const list = await DATE.findOne({
    where: { dt_seq: seq },
  });
  return res.json(list);
});
router.get("/subject", async (req, res) => {
  let seq = req.query.seq;
  const subject = await TODO.findAll({
    attributes: [
      Sequelize.fn("DISTINCT", Sequelize.col("td_subject")),
      "td_subject",
    ],
    where: { td_dtseq: seq },
  });
  return res.json(subject);
});
router.get("/dateOK", async (req, res) => {
  let date = req.query.date;
  const isInDate = await DATE.findOne({
    where: { dt_date: date },
  });
  const dateSet = {
    dt_date: date,
    dt_perf: 0,
  };
  if (!isInDate) {
    try {
      await DATE.create(dateSet);
      console.log("만들었음");
    } catch (error) {
      res.send("SQL ERROR");
    }
  }
  const nowDate = await DATE.findOne({
    where: { dt_date: date },
  });
  return res.json(nowDate);
});
// router.get("/dateList", async (req, res, next) => {
//   const list = await DATE.findAll({
//     attributes: [Sequelize.fn("DISTINCT", Sequelize.col("dt_date")), "pl_date"],
//   });
//   res.json(list);
// });
router.get("/todo/insert", async (req, res) => {
  const dtseq = req.query.td_dtseq;
  const subject = req.query.td_subject;
  const content = req.query.td_content;
  const complete = req.query.td_complete;
  const dataSet = {
    td_dtseq: dtseq,
    td_subject: subject,
    td_content: content,
    td_complete: complete,
  };
  await TODO.create(dataSet);
  console.log("todo 만들었음");
});
export default router;

router.get("/todo/findOne", async (req, res) => {
  const seq = req.query.seq;
  const list = await TODO.findOne({
    where: { td_seq: Number(seq) },
  });
  return res.json(list);
});
router.get("/todo/delete", async (req, res) => {
  const seq = req.query.seq;
  try {
    const list = await TODO.destroy({
      where: { td_seq: Number(seq) },
    });
    return res.send("삭제완료");
  } catch (error) {
    return res.send("삭제실패");
  }
});
router.get("/todo/update", async (req, res) => {
  const seq = req.query.td_seq;
  const dtseq = req.query.td_dtseq;
  const subject = req.query.td_subject;
  const content = req.query.td_content;
  const complete = req.query.td_complete;

  await TODO.update(
    { td_subject: subject, td_content: content, td_complete: complete },
    {
      where: { td_seq: seq },
    }
  );
  const compCount = await TODO.findOne(
    {
      attributes: [Sequelize.fn("COUNT", Sequelize.col("td_seq"))],
    },
    {
      where: { td_dtseq: dtseq, td_complete: true },
    }
  );

  return res.json(compCount);

  console.log("todo 수정함");
});
router.get("/todo/compUp", async (req, res) => {
  const seq = req.query.td_seq;
  const comp = req.query.td_complete;
  await TODO.update({ td_complete: comp }, { where: { td_seq: seq } });
});
