const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const expressUpload = require("express-fileupload");

// Create Express application
const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressUpload({
    useTempFiles: true,
    debug: false,
    preserveExtension: true,
    tempFileDir: path.resolve("storage/tmp/files"),
  })
);

module.exports = app;
