const fs = require("fs/promises");

exports.selectCards = () => {
  let files = [
    `${__dirname}/../data/cards.json`,
    `${__dirname}/../data/templates.json`,
  ];
  return Promise.all(
    files.map((file) => {
      return fs.readFile(file, "utf8");
    })
  ).then(([cards, templates]) => {
    const cardData = [];
    const parsedCards = JSON.parse(cards);
    const parsedTemplates = JSON.parse(templates);

    parsedCards.forEach((card) => {
      const cardObj = {};
      cardObj.title = card.title;
      cardObj.card_id = card.id;

      // i used .find() here to exit the loop once the condition is met as this could be an expensive process with a large amount of data:
      const matchingTemplate = parsedTemplates.find(
        (template) => template.id === card.pages[0].templateId
      );
      // if no matching template then a default url could be assigned for a placeholder image

      cardObj.imageUrl = matchingTemplate.imageUrl;

      return cardData.push(cardObj);
    });

    return JSON.stringify(cardData);
  });
};

exports.selectCardsById = (cardId) => {
  return fs.readFile(`${__dirname}/../data/cards.json`, "utf8").then((data) => {
    const parsedCards = JSON.parse(data);

    // as above .find() would be more efficient here for a larger amount of data as the loop would break once the matching card has been found, and i would aim to stay consistent in the "real world" but I wanted to demonstrate my ability to use an alternative method
    const filteredCard = parsedCards.filter((card) => {
      return card.id === cardId;
    });

    return JSON.stringify(filteredCard[0]);
  });
};
