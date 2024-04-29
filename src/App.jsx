import { useEffect, useState } from "react";

import Header from "./components/Header";
import Interface from "./components/Interface";

function App() {
  const [data, setData] = useState([]);
  const [showInterface, setInterface] = useState(false);
  function getUserInfo(userName) {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((userData) => setData(userData));
    setInterface(true);
  }

  return (
    <main className="bg-white p-5 rounded-2xl overflow-hidden border-none shadow-2xl    w-[850px]">
      <div>
        <Header getUserInfo={getUserInfo} />
        {showInterface && <Interface data={data} />}
      </div>
    </main>
  );
}

export default App;
