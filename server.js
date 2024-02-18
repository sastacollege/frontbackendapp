import express from "express";
import fs from "fs";
import dotenv from "dotenv";
let app = express();

//CONGIG DOTENV
dotenv.config();

//MIDDLEWARE
app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

//GET ALL THE FRUITS
app.get("/api/fruits", (req, res) => {
  let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  res.send(data);
});

let Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Server is listening at port ${Port}`);
});
