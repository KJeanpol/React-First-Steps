const ironman = {
  firstName: "Pol",
  lastNmae: "Stark",
  age: 67,
};
ironman.firstName = "Tony";
const spiderman = { ...ironman };
spiderman.firstName = "Peter";
//... operador spread ?, primer lvl
// const spiderman = structuredClone(ironman);   // clone a profundidad
console.log(ironman, spiderman);

// transpilacion de ts a js, pero interfaces no tiene interpretacion en JS
// molde de como queremos que luzca algo,
interface Person {
  firstName: string;
  lastNmae: string;
  age: number;
  address?:Address
}

interface Address {
  postalCode: number;
  city: string;
}

const ironman2: Person = {
  firstName: "Pol",
  lastNmae: "Stark",
  age: 67,
  address: {
    postalCode: 13123,
    city: "string",
  },
};

console.log(ironman2);
