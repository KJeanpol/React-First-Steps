// App punto de entrada de la aplicacion

import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsIncart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 3 },
  { productName: "PS5", quantity: 5 },
  { productName: "Control Xbox", quantity: 9 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {/* con desestructuracion se veria itemsIncart.map(({productname, quantity})*/}
      {itemsIncart.map((item) => (
        <ItemCounter
          key={item.productName} //la key siempre debe ser unica
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
      {/* <ItemCounter name="Nintendo Switch 2" quantity={3} />
      <ItemCounter name="PS5" quantity={3} />
      <ItemCounter name="PC Gamer" quantity={3} /> */}
    </>
  );
}
