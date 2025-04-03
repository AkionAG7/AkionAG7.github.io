import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portafolio from "./Pages/Portafolio";
import ProyectoPortafolio from "./Pages/ProyectoPortafolio";
import { DarkModeProvider } from "./features/Context/DarkModeContext";
import NavbarComp from "./features/Navbar/NavbarComp";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Portafolio />} />
          <Route path="/Proyectos" element={<ProyectoPortafolio />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
