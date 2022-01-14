const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const count = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      count.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });

  return count;
}

function calculateEntry(entrants) {
  // Ref. https://www.horadecodar.com.br/2020/10/06/como-verificar-se-objeto-esta-vazio-em-javascript/
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const visitors = countEntrants(entrants);

  const childrens = visitors.child * prices.child;
  const adults = visitors.adult * prices.adult;
  const seniors = visitors.senior * prices.senior;

  return childrens + adults + seniors;
}

// Ref. https://github.com/tryber/sd-018-a-project-zoo-functions/pull/11
module.exports = { calculateEntry, countEntrants };
