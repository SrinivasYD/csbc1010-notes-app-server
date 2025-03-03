const config = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const healthRouter = require("./routes/health");
const notesRouter = require("./routes/notes");
const noteRouter = require("./routes/note");

if (config.error) {
  throw config.error;
}

const port = process.env.PORT; // || 3001
global.port = port;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURI = process.env.MONGODB_URI;

/*
  TODO-1: Settup Database connection
*/
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

/*
  TODO-2: Upon database connection success, create the relavent table(s) if it does not exist.
*/

app.get("/", (req, res) => {
  res.send("CSBC1010 Assignment 3 - My Notes");
});

app.use("/health", healthRouter);
app.use("/notes", notesRouter);
app.use("/note", noteRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
