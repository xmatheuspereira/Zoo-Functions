const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) =>
  data.species.filter(species => species.id === id1 || species.id === id2);

module.exports = getSpeciesByIds;
