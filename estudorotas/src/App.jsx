import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/home"
import SaoPaulo from "./paginas/SaoPualo"

export default function App()
{
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sp" element={ <SaoPaulo/> } />
      </Routes>
      </BrowserRouter>
    );
}