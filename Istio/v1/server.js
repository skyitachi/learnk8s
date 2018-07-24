const express = require("express");
const { expressStatus } = require("@dwd/middleware-status");

const app = new express();

app.use(expressStatus());

app.get("/hello", (req, res) => {
  console.log("in the request");
  res.json({
    msg: "ok"
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "v1"
  });
});
app.listen(8080, () => {
  console.log("app start ok");
});
