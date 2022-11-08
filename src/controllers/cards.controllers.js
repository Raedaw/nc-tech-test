const { selectCards, selectCardsById } = require("../models/cards.models");

exports.getCards = (req, res) => {
  selectCards().then((cards) => {
    res.status(200).send({ cards });
  });
};

exports.getCardsById = (req, res) => {
  const { cardId } = req.params;
  selectCardsById(cardId).then((card) => {
    res.status(200).send({ card });
  });
};
