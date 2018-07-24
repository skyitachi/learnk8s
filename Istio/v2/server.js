const express = require("express");
const { expressStatus } = require("@dwd/middleware-status");

const app = new express();

app.use(expressStatus());

app.get("/hello", (req, res) => {
  res.json({
    msg: "hello from v2"
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "v2"
  });
});

app.listen(8080, () => {
  console.log("app start ok");
});
