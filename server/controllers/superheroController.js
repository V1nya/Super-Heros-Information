const SuperheroModel = require("../models/SuperheroModel.js");
const express = require("express");

const app = express();
app.use(express.json());

const getAll = async (req, res) => {
  try {
    const posts = await SuperheroModel.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot show all heroes" });
  }
};

const create = async (req, res) => {
  try {
    const doc = new SuperheroModel({
      realName: req.body.realName,
      nickName: req.body.nickName,
      originalDescription: req.body.originalDescription,
      superPowers: req.body.superPowers,
      catchPhrase: req.body.catchPhrase,
      imageURL: req.body.imageURL,
    });

    const post = await doc.save();
    res.json(post);
    console.log(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Cannot create superhero",
    });
  }
};

const deleteHero = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedHero = await SuperheroModel.findByIdAndRemove(id);

    if (deletedHero) {
      res.json(deletedHero);
    } else {
      res.status(404).json({ error: "Hero not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot delete superhero" });
  }
};

const findById = async (req, res) => {
  const id = req.params.id;
  const findOne = await SuperheroModel.findById(id);
  res.json(findOne);
};

const update = async (req, res) => {
  try {
    const id = req.params.id;

    const hero = await SuperheroModel.findById(id);
    console.log(hero);

    if (hero) {
      const updatedHero = await SuperheroModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.json(updatedHero);
    } else {
      res.status(404).json({ error: "Hero not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, create, deleteHero, findById, update };
