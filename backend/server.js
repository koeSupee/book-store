import express from "express";
import { PORT } from "./config.js";
import bookRouter from "./routes/bookRoute.js";
import connectDB from "./db/condb.js";

const app = express();
connectDB();
app.use(express.json());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome");
});

app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Port listening is :${PORT}`);
});
