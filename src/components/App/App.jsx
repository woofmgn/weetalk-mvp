import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { Promo } from "../../pages/Promo/Promo";
import { NavBar } from "../NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
