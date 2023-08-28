import logo from "./logo.svg";
import "./App.css";
import { Datos } from "./components/Datos";
import { TablaNotas } from "./components/TablaNotas";
import Navbar from "./components/Navbar";
import { Recomienda } from "./components/Recomienda";

function App() {
  return (
    <>
      <Datos></Datos>
      <Navbar></Navbar>
      <TablaNotas></TablaNotas>
      <Recomienda></Recomienda>
    </>
  );
}

export default App;
