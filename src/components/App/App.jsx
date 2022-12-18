import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { Promo } from "../../pages/Promo/Promo";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
    </div>
  );
}

export default App;
