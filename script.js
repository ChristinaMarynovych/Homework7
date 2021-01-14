const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function 1
function getMyTaxes(salary) {
    return this.tax * salary;
  };
  
  console.log(getMyTaxes.call(ukraine, 1000));
  console.log(getMyTaxes.call(latvia, 1000));
  console.log(getMyTaxes.call(litva, 1000));
  
  // function 2
  function getMiddleTaxes(salary) {
  return this.middleSalary * this.tax;
  };
  
  console.log(getMiddleTaxes.call(ukraine));
  console.log(getMiddleTaxes.call(latvia));
  console.log(getMiddleTaxes.call(litva));
  
  // function 3
  function getTotalTaxes(salary) {
  //   return this.tax * this.middleSalary * this.vacancies;
      return getMiddleTaxes.call(this) * this.vacancies;
  };
  
  
  console.log(getTotalTaxes.call(ukraine));
  console.log(getTotalTaxes.call(latvia));
  console.log(getTotalTaxes.call(litva));
  
  // function 4
  function getMySalary(country) {
    setInterval(() => {
    // const minSalary = 1500;
    // const maxSalary = 2000;
    //   const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
      const salary = Math.floor(Math.random() * 500) + 1500;
      const taxes = +getMyTaxes.call(country, salary);
      const profit = +(salary - taxes).toFixed(2);
      return console.log({salary, taxes, profit});
   }, 10000);
  }
   
  getMySalary(ukraine);
