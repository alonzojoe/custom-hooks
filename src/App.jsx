import { useState } from "react";
import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default App;
