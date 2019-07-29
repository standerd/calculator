import React from "react";
import "./UI.css";

const UI = props => {
  return (
    <div className="Calculator">
      <input id="screen" type="text" onChange={props.value} value="0" />
      <br />
      <div className="rowOne">
        <button onClick={props.openBracket}>(</button>
        <button onClick={props.closeBracket}>)</button>
        <button onClick={props.percentage}>%</button>
        <button onClick={props.allClear}>AC</button>
      </div>
      <div className="rowOther">
        <button onClick={props.seven}>7</button>
        <button onClick={props.eight}>8</button>
        <button onClick={props.nine}>9</button>
        <button onClick={props.multiply}>&#10005;</button>
      </div>
      <div className="rowOther">
        <button onClick={props.four}>4</button>
        <button onClick={props.five}>5</button>
        <button onClick={props.six}>6</button>
        <button onClick={props.divide}>&#10135;</button>
      </div>
      <div className="rowOther">
        <button onClick={props.one}>1</button>
        <button onClick={props.two}>2</button>
        <button onClick={props.three}>3</button>
        <button onClick={props.add}>&#10133;</button>
      </div>
      <div className="rowOther">
        <button onClick={props.zero}>0</button>
        <button onClick={props.stop}>.</button>
        <button onClick={props.equals}>=</button>
        <button onClick={props.subtract}>&#10134;</button>
      </div>
    </div>
  );
};

export default UI;
