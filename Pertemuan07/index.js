//1. JavaScript Conditional:
//If, Else-if, Else

let nilaiUjian = 95;
if (nilaiUjian > 80){
    console.log("Selamat Nilai Ujian Anda A");
} else if (nilaiUjian >=70 && nilaiUjian <=80){
    console.log("Selamat Nilai Ujian Anda B");
} else{
    console.log("Mohon Maaf Anda Harus Mengulang");
}

//Switch Case
let makananDining;
let hari = "Senin";

switch(hari){
    case "Senin":
        makananDining = "Tahu Santan & Telur Goreng";
        break;
    case "Selasa":
        makananDining = "Tempe kecap & Sayur";
        break;
    case "Rabu":
        makananDining = "Gluten & Sayur";
        break;
    case "Kamis":
        makananDining = "Soto & Gado-gado";
        break;
    case "Jumat":
        makananDining = "Tempe Kecap";
        break;
    case "Sabtu":
        makananDining = "Brenebon";
        break;
    case "Minggu":
        makananDining = "Perkedel & Sayur"
        break;
}
console.log(makananDining);

//2. JavaScript Loop
//For In Loop
const Movie = {
    Judul: "Parasite",
    TanggalRilis: "21 Juni 2019",
    Sutradara: "Boong Joon-Ho",
    Genre: "Thriller, Drama, Comedy, Mystery"
};
for(property in Movie){
    console.log(property, ':', Movie[property]);
}

//For Of Loop
const book = ["Game Of Thrones: A song of Ice and Fire",
    "Harry Potter and The Philosopher's Stone",
    "Lord Of the Rings = The Fellowship of The Ring"
];
for(x of book){
    console.log(book);
}

//While Loop
let a = 15; //penurunan angka, dikurang 2
while (a >= 0){
    console.log(a);
    a -= 2;
}

//Do While Loop
let i = 1;

do{
    console.log(i);
    i++;
}while (i <= 10);