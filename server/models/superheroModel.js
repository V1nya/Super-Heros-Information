const mongoose = require("mongoose");

const SuperHeroSchema = new mongoose.Schema(
  {
    id: Number,
    realName: String,
    nickName: String,
    originalDescription: String,
    superPowers: String,
    catchPhrase: String,
    imageURL: String,
  },
  {
    timestamps: true,
  }
);
const SuperheroModel = mongoose.model("Superhero", SuperHeroSchema);

module.exports = SuperheroModel;
