const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalsList = data.species.find((species) => species.name === animal);
  return animalsList.residents.every((species) => species.age > age);
};

module.exports = getAnimalsOlderThan;
