const { animal } = require('faker/locale/zh_TW');
const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employee) => employee.id === id);
  const firstSpecies = employee.responsibleFor[0];
  const animalName = species.find((animal) => animal.id === firstSpecies).residents;

  const sorted = animalName.sort(function (a, b) {
    return a.age < b.age ? 1 : a.age > b.age ? -1 : 0
  });

  return sorted.map(({ name, sex, age }) => [name, sex, age])[0];
}

module.exports = getOldestFromFirstSpecies;

// Primeiro procurar pela primeira especie gerenciada pelo funcionario (employess)
// Segundo retornar array com nome, sexo e idade do animal mais velho da especie
