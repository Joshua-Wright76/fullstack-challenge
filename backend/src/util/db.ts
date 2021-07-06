import sqlite from "better-sqlite3";

const db = sqlite("./sqlite.db", { verbose: console.log });
if (db.open) {
  console.log("opened sqlite db");
}

export default db;
