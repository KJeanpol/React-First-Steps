// 2 argumentos posibles resolve, reject
const myPromise = new Promise<number>((resolve,reject) => {
  setTimeout(() => {
    console.log("2 seconds later...");
    //resolve(100);
    reject("Se perdio");
  }, 2000);
});

myPromise.then((message) => {
  console.log("Promise resolved with message: ", message);
}).catch((err) => {
  console.warn("Error in promise: ", err);
})
.finally(() => {
  console.log("Finally executed");  //sin importar si se resolvio o rechazo
});


