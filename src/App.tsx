import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portafolio from "./Pages/Portafolio";
import ProyectoPortafolio from "./Pages/ProyectoPortafolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portafolio />} />
        <Route path="/Proyectos" element={<ProyectoPortafolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
