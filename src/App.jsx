import React, { useState } from "react";
import "./App.css";
import Calculator1 from "./Calculator1";

const App = () => {
  const [calciVal, setCalciVal] = useState("");
  
  const clickHandler = (e) => {
    const value = e.target.value;
    
    if (value === "=") {
      try {
        setCalciVal(eval(calciVal).toString());
      } catch (error) {
        setCalciVal("Error");
      }
    } else if (value === "CL") {
      setCalciVal("");
    } else if (value === "C") {
      setCalciVal(calciVal.slice(0, -1));
    } else {
      setCalciVal(calciVal.concat(value));
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="container">
        <input id="display" type="text" value={calciVal} readOnly />
        <Calculator1 clickHandler={clickHandler} />
      </div>
    </>
  );
};

export default App;
