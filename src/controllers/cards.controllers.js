const { selectCards } = require("../models/cards.models");

exports.getCards = (req, res) => {
  selectCards().then((cards) => {
    res.status(200).send({ cards });
  });
};
