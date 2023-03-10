import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim /> } />
          <Route path="*" element={<div>Pagina não escontrada</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
