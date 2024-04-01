import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./WebComponents/Home";
import { Login } from "./AdminComponents/Login/Login";
import { Register } from "./AdminComponents/Register/Register";
import { Induccion } from "./WebComponents/Induccion/Induccion";
import { Pqrsf } from "./WebComponents/Pqrsf/Pqrsf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/induccion" element={<Induccion />} />
        <Route path="/pqrsf" element={<Pqrsf />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
