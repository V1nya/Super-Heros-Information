const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const superheroController = require("./controllers/superheroController.js");

const mongoose = require("mongoose");

const MONGODB_URI =
  "url mongoDB";
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/heroes", superheroController.create);
app.get("/heroes", superheroController.getAll);
app.delete("/heroes/:id", superheroController.deleteHero);
app.get("/heroes/:id", superheroController.findById);
app.post("heroes/update", superheroController.update);

async function start() {
  try {
    await mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected DB");
      })
      .catch((err) => {
        console.log(`DB error: ${err}`);
      });
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
