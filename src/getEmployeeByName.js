const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findEmployee = data.employees.find((name) => name.firstName === employeeName
|| name.lastName === employeeName);

  if (findEmployee === undefined) {
    return {};
  }

  return findEmployee;
}

module.exports = getEmployeeByName;
