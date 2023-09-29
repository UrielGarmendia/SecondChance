const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const { ACCESS_TOKEN } = process.env;
require("./db");

const server = express();

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(
  cors({
    origin: "https://tu-suenio-front.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
server.use((req, res, next) => {
  res.header("Authorization", `"Bearer ${ACCESS_TOKEN}`);
  res.header(
    "Access-Control-Allow-Origin",
    "https://tu-suenio-front.vercel.app"
  ); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
