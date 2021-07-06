/**
 * resets the database to an initial, clean state.
 *
 * alternatively, revert the sqlite.db file.
 *
 * USAGE: npm run db-reset
 */

import faker from "faker";
import db from "./db";
faker.seed(981_273_491_821);

// drop and create patients table
db.prepare(`DROP TABLE IF EXISTS patients`).run();
db.prepare(
  `CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY,
    mrn TEXT NOT NULL,
    name TEXT NOT NULL,
    dob TEXT NOT NULL,
    starred INTEGER NOT NULL
)`
).run();

const patients = [];
for (let i = 0; i < 1_000; i++) {
  const fakeDOB = faker.date.past(100);
  fakeDOB.setHours(0, 0, 0, 0);
  patients.push({
    mrn: faker.random.alphaNumeric(10).toUpperCase(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    dob: fakeDOB.toISOString(),
    starred: 0,
  });
}

const insertPatients = db.transaction((patients) => {
  const insert = db.prepare(
    `INSERT INTO patients(mrn, name, dob, starred) values (@mrn, @name, @dob, @starred)`
  );
  for (const patient of patients) {
    insert.run(patient);
  }
});

insertPatients(patients);

db.close();
