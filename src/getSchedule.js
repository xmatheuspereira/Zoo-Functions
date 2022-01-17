const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = species.map((animal) => animal.name);
const days = Object.keys(hours);

function getValueObj(day) {
  let message = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  const avaliable = species.filter(({ availability }) => availability.includes(day));
  let anuncio = avaliable.map(({ name }) => name);
  if (day === 'Monday') {
    message = 'CLOSED';
    anuncio = 'The zoo will be closed!';
  }
  return { [day]: { officeHour: message, exhibition: anuncio } };
}

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return getValueObj(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return days.reduce((acc, day) => ({ ...acc, ...getValueObj(day) }), {});
}

module.exports = getSchedule;
// Ref. https://github.com/tryber/sd-018-a-project-zoo-functions/pull/121
