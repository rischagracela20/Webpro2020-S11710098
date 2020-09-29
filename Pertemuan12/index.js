// // Arrow Function


// //single argument
// const calcAge = (year) => {
//     return 2020 -  year;
// };

// //Multiple arguments
// const calcAge = (birthYear, currentYear) => {
//     const x;
//     return currentYear - birthYear;
// };

// //No argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function (el) {
//     return 2020 - el;
// });

// const calcAge6 = years.map((el) => 2020 - el);

// console.log(calcAge(1991, 2021));

//EXECISE
//Convert to ES6 Syntax
function yearUntilRetirement(year, firstName){
    var age = 28;
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + " retired in " + retirement + " years");
    }else{
        console.log(firstName + " is already retired.");
    }
}

//EXERCISE ANSWER
const yearUntilRetirement = (birthYear = 1999, currentYear = 2020, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 65 - age;
    if(retirement > 0 ){
        console.log(`${firstName} retired in ${retirement} years`);
    }else{
        console.log(`${firstName} is already retired.`);
    }
}

console.log(yearUntilRetirement(1999, 2020, "Rischa"));
