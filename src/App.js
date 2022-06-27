import { useState } from "react";
import Header from "./Header";
import Mapa from "./Mapa";
import Weather from "./Weather";

import "./index.css";

function App() {
  const [pos, setPos] = useState([]);

  return (
    <>
      <Header pos={pos} setPos={setPos} />
      {pos[1] ? (
        <div className="container">
          <Weather pos={pos} />
          <Mapa pos={pos} />
        </div>
      ) : null}
      ;
    </>
  );
}

export default App;
