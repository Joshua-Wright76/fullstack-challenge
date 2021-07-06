import bodyParser from "body-parser";
import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import patients from "./patients";
import db from "./util/db";
import logResponseTimes from "./util/timing";

const port = 8000;
const app = express();

app.use(bodyParser.json()); // parse json request bodies
app.use(logResponseTimes); // log api response times to console
// mount openapi interactive documentation
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(YAML.load("./src/api.yaml"), { explorer: true })
);

app.use("/api/patients", patients);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

process.on("exit", () => {
  db.close();
  console.log("closed sqlite db");
});
