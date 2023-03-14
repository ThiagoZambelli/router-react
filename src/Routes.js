import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

function AppRoutes
() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim /> } />
          <Route path="*" element={<div>Pagina não escontrada</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
