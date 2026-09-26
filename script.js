// ეს არის object ვქმნით ცვლადს და ვათავსებთ 1 ობიექტის ინფორმაციას
// შემდეგ  ვიძახებთ ცვლადის სახელის key  და key დახმარებით შეგვიძლია მივწვდეთ value  მნიშვნელობას-ობიექტს
let hero = {
  userName: "Hulk",
  dmg: 50,
  hp: 100,
  xp: 100,
  color: "Green",
  isAlive: true,
};

const heroInfo = `hero-ს ძალა არის ${hero.dmg}`;
const heroSkills = `hero-ს xp ${hero.xp} ხოლო hp-${hero.hp} `;

//

// object-დესტრუქტორიზაცია  //დანაწევრება//  /დაყოფა/

const ufc = {
  topuria: "Double Champ",
  dvalishvili: "Champ",
  topuriaRecord: "17 - 1",
  dvalishviliRecord: 21 - 5,
  topuriaTitle: "He is no longer the champion.",
};

// აქ ამოვიღეთ მნიშვნელობები და მოვათავსეთ ერთ ცვლადში სადაც აღარ გვჭირდება key-ufc რომ მივწვდეთ-ვიმოქმედოთ

const { topuria, dvalishvili, topuriaRecord, dvalishviliRecord } = ufc;
console.log(`ილია თოფურია არის ${topuria}`);
console.log(`თოფურიას რეკორდი არის ${topuriaRecord}`);
if (topuria === "Double Champ") {
  console.log("still champ");
} else {
  console.log("He is no longer the champion");
}
//

// Array-დესტრუქტორიზაცია

// index          0              1         2
let myInfo = ["Aleksandre", "Ramishvili", 20];
//index  0           1       2
const [myName, myLastname, myAge] = myInfo;
//

// NEW THEME
//                       import              //                 export
// obj რომ მოვათავსოთ სხვადასხვა ინფორმაცია ერთ ცვლადში exporti-დან
const math = {
  firstNumber: 10,
  secondNumber: 20,
};
// გამოვიტანეთ  export ობიქეტში ცვლად math ში დავყავით და შეგვიძლია  მათზე კონტროლი-ცვლილებები სვლადის სახელით  (კონკრეტულ ობიექტზე)
import { firstNumber } from "./math";
import { secondNumber } from "./math";

// HOMEWORK

const students = [
  {
    name: "Nika",
    age: 19,
    city: "Tbilisi",
    score: 87,
    isActive: true,
  },
  {
    name: "Ana",
    age: 21,
    city: "Batumi",
    score: 94,
    isActive: true,
  },
  {
    name: "Giorgi",
    age: 18,
    city: "Kutaisi",
    score: 68,
    isActive: false,
  },
];

console.log(students[0].name);
console.log(students[1].city);
console.log(students[0]);

if (students[1].score >= 90) {
  console.log("excellent Result");
} else {
  console.log("Student is active");
}

//  task 4

const products = [
  {
    name: "MacBook Air",
    price: 3200,
    stock: 4,
    details: {
      color: "Midnight",
      storage: "256GB",
    },
  },
  {
    name: "iPhone",
    price: 2500,
    stock: 0,
    details: {
      color: "Black",
      storage: "128GB",
    },
  },
  {
    name: "AirPods",
    price: 550,
    stock: 12,
    details: {
      color: "White",
      storage: undefined,
    },
  },
];
console.log(products[0].price);
console.log(products[1].details.color);
console.log(products[0].details.storage);
console.log(products[2].storage);

if (products[1].stock > 0) {
  console.log("Avilable");
} else {
  console.log("Out of stock");
}

if (products[0].price > 3000) {
  console.log("Expensive product");
} else {
  console.log("good price");
}

// TASK 6

const user = {
  username: "CodeMaster",
  age: 22,
  city: "Tbilisi",
  profession: "Developer",
};

const { age, username, city, profession } = user;
console.log(age);
console.log(username);
console.log(city);
console.log(profession);
if (city === "Tbilisi") {
  console.log("Lives in Tbilisi");
} else {
  console.log("Lives somewhere else");
}
// TASK 7

const technologies = ["JavaScript", "React", "Node.js", "PostgreSQL"];
const [firstTechnology, secondTechnology] = technologies;

const [firstTechnology, secondTechnology, thirdTechnology, fourthTechnology] =
  technologies;
//

const cars = [
  {
    brand: "Tesla",
    model: "Model Y",
    year: 2021,
    price: 8500,
    specs: {
      fuel: "Electric",
      drive: "AWD",
    },
  },
  {
    brand: "BMW",
    model: "330i",
    year: 2020,
    price: 10500,
    specs: {
      fuel: "Petrol",
      drive: "RWD",
    },
  },
  {
    brand: "Hyundai",
    model: "Ioniq 5",
    year: 2022,
    price: 9200,
    specs: {
      fuel: "Electric",
      drive: "RWD",
    },
  },
];
console.log(cars[0].brand);
console.log(cars[1].specs.drive);
console.log(cars[2].specs.fuel);

if (cars[0].price <= cars[2].price) {
  console.log("Tesla price is lower");
} else {
  console.log("Hyundai is higher price");
}

if (cars[0].year >= 2021 && cars[0].specs.fuel === "Electric") {
  console.log("Modern electric car ⚡");
} else {
  console.log("Does not match");
}
const { brand, model, price } = cars[0];

const {
  brand,
  specs: { fuel, drive },
} = cars[0];
console.log(fuel);
console.log(drive);

//
const candidates = [
  {
    name: "Luka",
    age: 17,
    score: 91,
    hasLaptop: false,
  },
  {
    name: "Mariam",
    age: 20,
    score: 88,
    hasLaptop: true,
  },
];
if (candidates[0].score >= 90 && candidates[0].hasLaptop === false) {
  console.log("Luka gets the laptop 💻");
} else {
  console.log("Luka does not qualify");
}
