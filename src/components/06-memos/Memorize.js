import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, incrementar } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        {/* Counter: <small>{counter}</small> */}
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary ml-3" onClick={() => incrementar(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
