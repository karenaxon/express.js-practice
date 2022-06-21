const { render } = require('ejs');
const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  // res.json({ message: "Hello!!!" });
  // res.download("server.js")
  res.render("index", { text: "World"})
})

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);