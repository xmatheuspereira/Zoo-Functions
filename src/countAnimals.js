const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const numberOfAnimals = {};

  if (!animal) {
    species.forEach(({ name, residents }) => { numberOfAnimals[name] = residents.length; });
    return numberOfAnimals;
  }

  const { specie, sex } = animal;

  if (sex) {
    const animalsBySpecies = species.find(({ name }) => name === specie).residents;
    return animalsBySpecies.filter((animals) => animals.sex === sex).length;
  }

  if (specie) {
    return species.find((animals) => animals.name === specie).residents.length;
  }
}

module.exports = countAnimals;

/* Ref. https://github.com/tryber/sd-018-a-project-zoo-functions/pull/11/
        https://github.com/tryber/sd-018-a-project-zoo-functions/pull/123/
        https://github.com/tryber/sd-018-a-project-zoo-functions/pull/2

        Contei com a ajuda do Yuri Carvalho para entendimento do problema proposto.
*/
