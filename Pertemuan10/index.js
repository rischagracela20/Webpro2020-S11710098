// //Var, Let, Const

// // let nama ="stenly";
// // let nama = "adam";

// // console.log(nama);

// //Scoope dalam javascript
// // 1. Function scope(var)
// // 2. BLOCK scope

// (function tes() {
//     for (var i = 0; i < 10; i++){
//         console.log(i);
//     }
// })();

// // console.log(i);

// {
//     let i;
//     for(i = 0; i<10; i++){
//     console.log(i);
//     }
// }

// console.log(i);


//Template Literal

const person = {
    firstName: "Rischa",
    lastName: "Gracela",
    age: 21,
};

console.log("Hallo nama saya " + person.firstName + " " + person.lastName + ". Umur saya adalah " + person.age + " tahun.")

console.log(
    `Hallo my name is ${person.firstName} ${person.lastName} Umur saya adalah ${person.age} tahun.`
)