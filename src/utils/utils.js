function idGenerator(previousId) {
  if (!previousId) return "card001";

  const splitId = previousId.match(/[a-zA-Z]+|[0-9]+/g);
  let num = Number(splitId[1]);
  num += 1;

  splitId[1] = num.toString().padStart(3, "0");

  return splitId.join("");
}

module.exports = idGenerator;
