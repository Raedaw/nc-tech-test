const express = require("express");
const { getCards } = require("./controllers/cards.controllers");

const app = express();

app.use(express.json());

app.get("/cards", getCards);

app.get("/cards/:cardId/:sizeId?", () => {
  // respond with card by id
});

module.exports = app;
