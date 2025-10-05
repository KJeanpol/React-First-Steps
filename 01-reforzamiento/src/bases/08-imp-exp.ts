import { heroes,type Hero } from "../data/heroes.data";

const getHerobeById = (id:number):Hero=> {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw new Error(`Hero with id ${id} not found`);
    return hero;
   }
console.log(getHerobeById(2));


const getHerobeByOwner = (owner:string):Hero[]=> {
    const owners = heroes.filter(hero => hero.owner === owner);
    if (!owners) throw new Error(`Heros with owner ${owner} not found`);
    return owners;
   }
console.log(getHerobeByOwner("DC"));