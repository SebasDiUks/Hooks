import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, incrementar } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>

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
