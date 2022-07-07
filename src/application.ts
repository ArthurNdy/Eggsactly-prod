import express = require("express");
import cors = require("cors");
// import bodyParser = require("body-parser");
import routes from "./controllers";
import path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use(cors());
// app.use(bodyParser);

app.use("/", routes);

export default app;
