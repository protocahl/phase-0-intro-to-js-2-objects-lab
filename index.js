const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe"));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street"));
  console.log(deleteFromEmployeeByKey(employee, "name"));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));