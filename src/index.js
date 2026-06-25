import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {});
    console.log(`server is running on ${process.env.PORT}`)
  })
  .catch((err) => {
    console.log("mongo db connection faild", err);
  });
