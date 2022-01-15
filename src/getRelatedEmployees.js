const data = require('../data/zoo_data');

const { employees } = data;

// Ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeesList = employees.filter((employee) => employee.managers.includes(managerId));
    return employeesList.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
  
getRelatedEmployees(stephanieId);
module.exports = { isManager, getRelatedEmployees };
