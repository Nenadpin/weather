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
          <div className="mapa">
            <Mapa pos={pos} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
