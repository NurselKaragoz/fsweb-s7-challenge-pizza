import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const Arttır = () => setCounter(counter + 1);
  const Azalt = () => setCounter(counter - 1);

  return (
    <>
      <div className="btn-box">
        <Button className="buton" onClick={Azalt}>
          -
        </Button>
        {counter}
        <Button className="buton" onClick={Arttır}>
          +
        </Button>
      </div>
    </>
  );
};
export default Counter;
