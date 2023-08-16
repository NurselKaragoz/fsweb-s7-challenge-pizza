import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Arttır = () => setCounter(counter + 1);
  const Azalt = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <div className="btn-box">
        <Button className="buton" color="warning" onClick={Azalt}>
          -
        </Button>

        <Button outline color="warning">
          {counter}
        </Button>

        <Button className="buton" color="warning" onClick={Arttır}>
          +
        </Button>
      </div>
    </>
  );
};
export default Counter;
