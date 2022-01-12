import express from "express";
import router from "./router/router.js";
import db from "./db/db.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    // await db;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
