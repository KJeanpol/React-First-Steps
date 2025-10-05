// Si son constantes es mejor definirlas fuera del componente
// para evitar que se redefinan en cada render (revisar si hay cambios)
// en el ciclo de revision y ejecucion de React

import type { CSSProperties } from "react";

const name = "Jeanpol";
const lastName = "Alvarado";
const favoriteGames = ["Zelda", "Mario", "Metroid"];
//valores booleanos no generan ningun cambio en el DOM
const isActive = false;
const address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
};

const myStyles: CSSProperties = {
  color: "red",
  backgroundColor: "black",
  fontWeight: "bold",
};

// style = {{}}  doble llave porque es un objeto de JSX
// la primera llave es para indicar que es JS y la segunda es el objeto
export function MyAwesomeApp() {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
      <p style={myStyles}>{isActive ? "Activo" : "Inactivo"}</p>
      <p>{JSON.stringify(address)}</p>
    </div>
  );
}
