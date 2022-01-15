const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const functionary = employees.find((employee) => employee.id === id);
  const firstSpecies = functionary.responsibleFor[0];
  const animalName = species.find((animal) => animal.id === firstSpecies).residents;

  const sorted = animalName.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    }
    if (a.age > b.age) {
      return -1;
    }
    return 0;
  });

  return sorted.map(({ name, sex, age }) => [name, sex, age])[0];
}

module.exports = getOldestFromFirstSpecies;
