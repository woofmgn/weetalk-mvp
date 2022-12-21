import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Advise } from "../../pages/Advise/Advise";
import { Favourites } from "../../pages/Favourites/Favourites";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Profile } from "../../pages/Profile/Profile";
import { Promo } from "../../pages/Promo/Promo";
import { api } from "../../utils/api";
import { getStorageUser } from "../../utils/storage";
import { NavBar } from "../NavBar/NavBar";
import "./App.scss";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [membersCards, setMembersCards] = useState([]);
  const [count, setCount] = useState(0);
  const [owner, setOwner] = useState("");
  const [isColumn, setIsColumn] = useState(false);
  const navigate = useNavigate();

  const handleSetCount = () => {
    setCount((prev) => prev + 1);
  };

  const handlerSetIsColumn = () => {
    setIsColumn((prev) => !prev);
  };

  const changeUserData = (userData) => {
    setCurrentUser(() => userData);
  };

  const handleChangeOwner = (newOwner) => {
    setOwner(newOwner);
  };

  const handleGetMembersCards = async () => {
    try {
      const res = await api.getMembers();
      setMembersCards(() => res);
    } catch {
      console.log(Error);
    }
  };

  useEffect(() => {
    const isOwner = getStorageUser();
    console.log(isOwner);
    if (isOwner) {
      setOwner(() => isOwner);
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [owner]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onChangeUserData={changeUserData} />} />
        <Route
          path="/promo"
          element={
            <Promo
              currentUser={currentUser.name}
              onSetCount={handleSetCount}
              onChangeOwner={handleChangeOwner}
              count={count}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              onGetMembersCards={handleGetMembersCards}
              membersCards={membersCards}
              owner={owner}
              onSetIsColumn={handlerSetIsColumn}
              isColumn={isColumn}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              onGetMembersCards={handleGetMembersCards}
              membersCards={membersCards}
              owner={owner}
              onSetIsColumn={handlerSetIsColumn}
              isColumn={isColumn}
            />
          }
        />
        <Route path="/advise" element={<Advise />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar count={count} />
    </div>
  );
}

export default App;
