function greet(name:string):string{
    return `Hola ${name}`;
}


//funciones de flecha, no cambia a lo que apunta el objeto this
// enviar un callback, o anonima, es mas simple leer el de flecha
// 
const greet2 = (name:string):string=> {
    return `Hola ${name}`;
}

const message=greet('Goku')
const message2=greet2('Vegetta')
console.log(message,message2)

function getUser(){
    return {
        uuid:'as',
        pass:'asd',
    }
}


const user= getUser();
// metodos son funciones dentro de un objeto
console.log(user)