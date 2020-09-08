// /*

//     object
// */

// // const mahasiswa = ["John", "Doe", 31, true];

// const mhs1 = {
//     namaDepan: 'John',
//     namaBelakang: 'Doe',
//     umur: 31,
//     sudahLulus: true,
//     alamat: {
//         jalan: "Jln. Arnold Mononutu",
//         kecamatan: "Airmadidi",
//         kabupaten: "Minahasa Utara",
//     },
//     Ipsemester: [3.05, 3.25, 3.0, 3.4],
//     hitungIPK: function (){
//         let total = 0;
//         this.Ipsemester.forEach(function(el){
//             total = total + el;
//         });
//         this.IPKumulatif = total / 4;         
//     },
// };

// //2. Kata kunci new
// // const mhs2 = new Object();
// // mhs2.namaDepan = "Jane";
// // mhs2.namaBelakang = "Smith";

// // Mengakses properti dari objek
// //1. Dot notation
// console.log(mhs1.umur);
// //2. Bracket notation
// console.log(mhs1["namaBelakang"]);
// 

//Array Object ()

const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan:"Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang:"Adam",
    },
];

mahasiswa.forEach(function(el){
    console.log(el);
});
