import express from "express";
import db from "./util/db";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const rows = db
      .prepare(`SELECT id, mrn, name, dob, starred FROM patients`)
      .all();
    // sqlite doesn't have a boolean type, so map 1/0 to true/false for the API
    const patients = rows.map((row) => {
      return { ...row, starred: row.starred === 1 };
    });
    res.json(patients);
  } catch (e) {
    res.status(500).json({ message: e?.message });
  }
});

router.post("/:id", (req, res) => {
  try {
    const { params: { id }, body } = req;
    let queryString = `UPDATE patients SET `;
    Object.keys(body).forEach(attribute => {
      let value = body[attribute];
      if (value === true) value = 1;
      if (value === false) value = 0;
      queryString += `${attribute} = ${value} `
    })
    queryString += `WHERE id = ${id}`
    const result = db.prepare(queryString).run();
    res.json(result);
  } catch (e) {
    res.status(500).json({ message: e?.message });
  }
});

export default router;
