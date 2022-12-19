import { Route, Routes } from "react-router-dom";
import { Advise } from "../../pages/Advise/Advise";
import { Favourites } from "../../pages/Favourites/Favourites";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Profile } from "../../pages/Profile/Profile";
import { Promo } from "../../pages/Promo/Promo";
import { NavBar } from "../NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/advise" element={<Advise />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
