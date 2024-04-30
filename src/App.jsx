import { useEffect, useState } from "react";

import Header from "./components/Header";
import Interface from "./components/Interface";
import { UserContext } from "./store/Context";
import NotFound from "./components/NotFound";

function App() {
  const [data, setData] = useState([]);
  const [showInterface, setInterface] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const [notFound, setNotfound] = useState(false);
  function getUserInfo(userName) {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((userData) => {
        if (userData.message === "Not Found") {
          console.log("Not FOund since you entered galat");
          setInterface(false);
          setNotfound(true);
        } else {
          setData(userData);
          setInterface(true);
          setNotfound(false);
        }
      });
  }

  return (
    <UserContext.Provider
      value={{
        getUserInfo,
        darkMode,
        setdarkMode,
        data,
        showInterface,
        setInterface,
      }}
    >
      <main
        className={`rounded-2xl overflow-hidden border-none shadow-2xl w-[850px] ${
          darkMode && "dark"
        } `}
      >
        <div className="dark:bg-slate-600 bg-white px-10 py-5">
          <Header />
          {showInterface && <Interface />}
          {notFound && <NotFound />}
        </div>
      </main>
    </UserContext.Provider>
  );
}

export default App;
