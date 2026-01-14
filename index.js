import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("hi ci cd dev");
});
app.listen(5, () => {
  console.log("server is runing on port number 5");
});
