import React, { Component } from "react";
import UI from "../Containers/UI/UI";

class Calculator extends Component {
  render() {
    //calculator button values
    const buttons = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      stop: "."
    };

    let myArray = [];
    let currentVal;
    let result = 0;
    let operator = "+";
    let finalNo = [0, 0, 0];
    let prevOperator;
    let active = true;

    // capture the input value and display as the user clicks on the buttons

    let value = char => {
      myArray.push(char);
      currentVal = myArray.join("");
      document.getElementById("screen").value = currentVal;
      finalNo[0] = Number.parseFloat(currentVal);
      finalNo[2] = Number.parseFloat(currentVal);
    };

    // check and store the operator that is to be used for the calculation

    let calculation = par => {
      if (par === "add") {
        prevOperator = "+";
        equal();
        operator = "+";
      } else if (par === "subtract") {
        prevOperator = "-";
        equal();
        operator = "-";
      } else if (par === "multiply") {
        prevOperator = "*";
        equal();
        operator = "*";
        active = false;
      } else if (par === "divide") {
        prevOperator = "/";
        equal();
        operator = "/";
      } else if (par === "percentage") {
        operator = "%";
        equal();
        operator = "+";
      }
    };

    // function if the equal sign was click or and other operator as this
    // acts in the same manner as clicking on the equal sign.

    let equal = () => {
      if (operator === "+") {
        result = finalNo[1] + finalNo[0];
      } else if (operator === "-") {
        result = finalNo[1] - finalNo[0];
      } else if (operator === "*") {
        if (!active) {
          result = finalNo[1] * finalNo[0];
          operator = "+";
          active = true;
        }
      } else if (operator === "/") {
        result = finalNo[1] / finalNo[0];
        operator = "+";
      } else if (operator === "%") {
        if (prevOperator === "*") {
          result = finalNo[1] * (finalNo[2] / 100);
        } else if (prevOperator === "/") {
          result = finalNo[1] / (finalNo[2] / 100);
        } else if (prevOperator === "+") {
          result = finalNo[1] * (finalNo[2] / 100) + finalNo[1];
        } else if (prevOperator === "-") {
          result = finalNo[1] - finalNo[1] * (finalNo[2] / 100);
        }
      }

      finalNo[1] = result;
      finalNo[0] = 0;
      myArray = [];
      document.getElementById("screen").value = finalNo[1].toFixed(2);
    };

    return (
      // UI Component call and set props for the button values.
      <UI
        zero={() => value(buttons.zero)}
        one={() => value(buttons.one)}
        two={() => value(buttons.two)}
        three={() => value(buttons.three)}
        four={() => value(buttons.four)}
        five={() => value(buttons.five)}
        six={() => value(buttons.six)}
        seven={() => value(buttons.seven)}
        eight={() => value(buttons.eight)}
        nine={() => value(buttons.nine)}
        stop={() => value(buttons.stop)}
        add={() => calculation("add")}
        value={value}
        subtract={() => calculation("subtract")}
        multiply={() => calculation("multiply")}
        divide={() => calculation("divide")}
        percentage={() => calculation("percentage")}
        equals={equal}
        allClear={() => {
          myArray = [];
          finalNo = [0, 0, 0];
          document.getElementById("screen").value = finalNo[0];
          operator = "+";
        }}
      />
    );
  }
}

export default Calculator;
