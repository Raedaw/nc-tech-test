const fs = require("fs/promises");

exports.selectCards = () => {
  return fs
    .readFile(`${__dirname}/../data/cards.json`, "utf8")
    .then((response) => {
      const cards = JSON.parse(response);
      return cards;
    });
};
