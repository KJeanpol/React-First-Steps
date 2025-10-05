const person = {
    name:"Tony",
    age:123,
    key:"Ironman",
}
interface Hero {
    name:string;
    age:number;
    key:string;
    rank?:string;
}

const useContext= ({key,name,age,rank}:Hero)=> {
    return {
        keyName : key,
        user: {
            name:name,
            age:age,
        },
        rank:rank,
    }

}

const {keyName,user:{age}} = useContext(person);
console.log(keyName,age)

// DESESTRUCTURACION

