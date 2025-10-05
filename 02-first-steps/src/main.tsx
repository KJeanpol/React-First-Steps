import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FirstStepsApp } from "./FirstStepsApp";
// import { MyAwesomeApp } from "./MyAwesomeApp";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // asegurarse que la aplicacion funcione como esperamos

  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
);
