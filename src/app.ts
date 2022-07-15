import express from "express";
import config from "../config/defaults";
import log from "./logger";

const port = config.port as number;
const host = config.host as string;

console.log(port);

const app = express();
// app.use(deserializerUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`server listening at http://${host}:${port}`);
  console.log(`server listening at http://${host}:${port}`);
});
