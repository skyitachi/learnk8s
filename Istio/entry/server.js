const express = require("express");
const { expressStatus } = require("@dwd/middleware-status");
const http = require("http");
const app = new express();

app.use(expressStatus());

app.get("/backend/hello", (req, res) => {
  http.get("http://svc:8080/version", (rawRes) => {
    rawRes.setEncoding("utf-8")
    let rawData = "";
    rawRes.on("data", (chunk) => { rawData += chunk });
    rawRes.on("end", () => {
      const msg = JSON.parse(rawData);
      res.json(msg);
    });
  }).on("error", (err) => {
    res.json({
      msg: err.message
    });
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "entry"
  });
});

app.listen(8080, () => {
  console.log("app start ok");
});
