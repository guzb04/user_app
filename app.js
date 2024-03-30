const express = require("express");
const User = require("./db/userModel");
const dbConnect = require("./db/dbConnect");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

dbConnect();

app.post("/users", (req, res) => {
  console.log(req.body)
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => {
      res.status(200).json({
        status: "ok"
      });
    })
    .catch((err) => {
      res.status(301).json({
        status: "Not added",
        error: err
      });
      console.log(err);
    });
});

app.get("/users/:id", (req, res) => {
  User.find({
    _id: req.params.id,
  }).then((users) => res.json(users))
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
})


app.delete("/users/:id", (req, res) => {
  User.deleteOne({
    _id: req.params.id
  })
    .then(() => {
      res.send("OK");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put("/users/:id", (req, res) => {
  User.updateMany(
    {
      _id: req.params.id
    },
    {
      $set: {
        password: req.body.password,
        email: req.body.email,
        name: req.body.name
      }
    },
  ).then(() => {
    res.send("OK");
  });
});

module.exports = app;
