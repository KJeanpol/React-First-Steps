// props ==== properties
// hooks === funciones que dejan usar estado y otras cosas de react
// importaciones de react al inicio, terceros, nuiestras, y css al final
import { useState } from "react";
import "./ItemCounter.css";
interface Props {
  name: string;
  quantity?: number;
}

export function ItemCounter(props: Props) {
  const [count, setCount] = useState(props.quantity ?? 0); //valor inicial del estado

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section className="item-row">
      <span className="item-text">{props.name}</span>
      <button
        onClick={() => {
          handleRemove();
        }}
      >
        -1
      </button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
}
