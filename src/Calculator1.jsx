import React from "react";

const Calculator1 = ({ clickHandler }) => {

  return (
    <div className="button-container">
      <button value="CL" onClick={clickHandler} id="clr" className="inputText tasks" >Clear </button>
      <button value="C" onClick={clickHandler} className="inputText tasks"> C </button>
      <button value="%" onClick={clickHandler} className="inputText tasks">% </button>
      <button value="/" onClick={clickHandler} className="inputText tasks">/ </button>
      <button value="1" onClick={clickHandler} className="inputText">1 </button>
      <button value="2" onClick={clickHandler} className="inputText">2 </button>
      <button value="3" onClick={clickHandler} className="inputText">3 </button>
      <button value="*" onClick={clickHandler} className="inputText tasks">* </button>
      <button value="4" onClick={clickHandler} className="inputText">4 </button>
      <button value="5" onClick={clickHandler} className="inputText">5 </button>
      <button value="6" onClick={clickHandler} className="inputText">6 </button>
      <button value="+" onClick={clickHandler} className="inputText tasks">+ </button>
      <button value="7" onClick={clickHandler} className="inputText">7 </button>
      <button value="8" onClick={clickHandler} className="inputText">8 </button>
      <button value="9" onClick={clickHandler} className="inputText">9 </button>
      <button value="-" onClick={clickHandler} className="inputText tasks" >- </button>
      <button value="0" onClick={clickHandler} className="inputText">0 </button>
      <button value="." onClick={clickHandler} className="inputText">. </button>
      <button value="=" onClick={clickHandler} className="inputEqual">=</button>
    </div>
  );
}
export default Calculator1;