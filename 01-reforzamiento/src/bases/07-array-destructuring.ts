const charNames= ['Goku', 'Vegeta','Trunks'];

const [p1] = charNames;

console.log(p1)

const returnsArrayFn = () => {
    return ['ABC', 123] as const ;
};

const [letters, numbers]=returnsArrayFn();
console.log(letters, numbers)

const useState = (value:string) => {
    return [value, (newValue:string) => {
        console.log('Valor actual', newValue)
    }] as const;
};

const [name,setName] = useState ('Goku');

console.log(name);       // Goku
setName('Vegeta'); 