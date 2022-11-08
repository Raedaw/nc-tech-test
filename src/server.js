const express = require("express");
const {
  getCards,
  getCardsById,
  postCards,
} = require("./controllers/cards.controllers");

const app = express();

app.use(express.json());

app.get("/cards", getCards);

app.get("/cards/:cardId", getCardsById);

app.post("/cards", postCards);

//app.get("/cards/:cardId/:sizeId?", getCardsById);

module.exports = app;
