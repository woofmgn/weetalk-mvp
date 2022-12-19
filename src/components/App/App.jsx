import { useState } from "react";
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
  const [currentUser, setCurrentUser] = useState({});

  const changeUserData = (userData) => {
    setCurrentUser(() => userData);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onChangeUserData={changeUserData} />} />
        <Route
          path="/promo"
          element={<Promo currentUser={currentUser.name} />}
        />
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
