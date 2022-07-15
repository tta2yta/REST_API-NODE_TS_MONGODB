import mongoose from "mongoose";
import { array } from "yup";
import config from "../../config/defaults";
import log from "../logger";

function connect() {
  //   const dbUri = config.dbUri as string;
  const dbUri =
    "mongodb+srv://tta2yta:07162078@cluster0.2hvf3d1.mongodb.net/?retryWrites=true";
  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("DataBase connected");
    })
    .catch((error) => log.error("sd error", error));
}
export default connect;
