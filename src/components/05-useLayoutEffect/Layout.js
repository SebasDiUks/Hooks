import React, { useLayoutEffect, useRef, useState } from "react";
// import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./Layout.css";

export const Layout = () => {
  const { counter, incrementar } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  // useEffect(() => {
  //   setBoxSize(pTag.current.getBoundingClientRect());
  //   // console.log("Hola");
  // }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => incrementar(1)}>
        Siguiente Quote
      </button>
    </div>
  );
};
