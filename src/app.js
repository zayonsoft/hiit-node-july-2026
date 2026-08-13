import express from "express";
import env from "./config/env.js";

import router from "./routes/index.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

export default app;
