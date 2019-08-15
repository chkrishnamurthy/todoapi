import config from "../server/config/appConfig";
import mongoose from "mongoose";

const { database, host, dialect, port } = config.development;
const connectionURL = `${dialect}://${host}:${port}/${database}`;

export default mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
