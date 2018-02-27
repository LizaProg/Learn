const getAverageSalary = (job, country) => {
    let workingDays = 0;
    let rateADay = 0;
    if (country === 'spain' && job === 'programmer') {
        workingDays = 245;
        rateADay = 500;
        return workingDays * rateADay;
    }
    if (country === 'russia' && job === 'programmer') {
        workingDays = 247;
        rateADay = 600;
        return workingDays * rateADay;
    }
    if (country === 'usa' && job === 'programmer') {
        workingDays = 250;
        rateADay = 700;
        return workingDays * rateADay;
    }
};

/*const salary1 = getAverageSalary('programmer', 'spain');
const salary2 = getAverageSalary('programmer', 'russia');
const salary3 = getAverageSalary('programmer', 'usa');*/

/*const job = 'programmer';
const salary1 = getAverageSalary(job, 'spain');
const salary2 = getAverageSalary(job, 'russia');
const salary3 = getAverageSalary(job, 'usa');*/

/*частичное применение функции:*/

const getProgrammersSalaryByCountry =
    country => getAverageSalary('programmer', country);

const salary1 = getProgrammersSalaryByCountry('spain');
const salary2 = getProgrammersSalaryByCountry('russia');
const salary3 = getProgrammersSalaryByCountry('usa');

console.log(salary1 + ' It is the salary in year programmer in Spain');
console.log(salary2 + ' It is the salary in year programmer in Russia');
console.log(salary3 + ' It is the salary in year programmer in USA');
console.log('.....');


/*зафиксирована страна, но с возможностью выбрать профессию:*/

const getAverageSalaryInSpain = (job, country) => {
    let workingDays = 245;
    let rateADay = 0;
    if (country === 'spain' && job === 'programmer') {
        rateADay = 500;
        return workingDays * rateADay;
    }
    if (country === 'spain' && job === 'builder') {
        rateADay = 600;
        return workingDays * rateADay;
    }
    if (country === 'spain' && job === 'cook') {
        rateADay = 750;
        return workingDays * rateADay;
    }
};

const getSalaryInSpain =
    job => getAverageSalaryInSpain(job, 'spain');

const salarySpain1 = getSalaryInSpain('programmer');
const salarySpain2 = getSalaryInSpain('builder');
const salarySpain3 = getSalaryInSpain('cook');

console.log(salarySpain1 + ' It is the salary in year in Spain programmers');
console.log(salarySpain2 + ' It is the salary in year in Spain builders');
console.log(salarySpain3 + ' It is the salary in year in Spain cooks');