/**
 * Algorithm
 * 1. Start
 * 2. Create input field accepts two arguments (mandatory) and 4 buttons as Operators
 * 3. on button click handle edgecase
 * 3.1 perform action based on value and set the state
 * 4. show the output as result
 * 5. End
 */

import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [input, setInput] = useState({
    num1: "",
    num2: "",
  });

  const _handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const _handleUpdate = (e: any) => {
    const { num1, num2 } = input;
    const { value } = e.target;
    if (!num1) {
      return alert("First Field should not be Empty");
    }
    if (!num2) {
      return alert("Second Field should not be Empty");
    }

    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (isNaN(number1) || isNaN(number2)) {
      return alert("Enter proper Value");
    }
    if (value === "add") {
      setOperator(value);
      const output: any = number1 + number2;
      setResult(output);
      setInput({ ...input, num1: "", num2: "" });
    }
    if (value === "substract") {
      setOperator(value);
      const output: any = number1 - number2;
      setResult(output);
      setInput({ ...input, num1: "", num2: "" });
    }
    if (value === "multiply") {
      setOperator(value);
      const output: any = number1 * number2;
      setResult(output);
      setInput({ ...input, num1: "", num2: "" });
    }
    if (value === "divide") {
      setOperator(value);
      const output: any = number1 / number2;
      setResult(output);
      setInput({ ...input, num1: "", num2: "" });
    }
  };
  return (
    <div className="container">
      <div id={input.num1 && input.num2 ? "mainContainer" : "border"}>
        <div className="resultContainer">
          <div id="result">
            <div>{result}</div>
            <div>{operator}</div>
          </div>
        </div>
        <div className="inputContainer">
          <input
            type="number"
            name="num1"
            className="input"
            placeholder="First Number"
            value={input.num1}
            style={{ width: "100px" }}
            onChange={_handleInput}
          />
          <input
            type="number"
            name="num2"
            className="input"
            placeholder="Second Number"
            value={input.num2}
            style={{ width: "100px" }}
            onChange={_handleInput}
          />
        </div>
        <button onClick={_handleUpdate} className="button" value="add">
          Add
        </button>
        <button onClick={_handleUpdate} className="button" value="substract">
          substract
        </button>
        <button onClick={_handleUpdate} className="button" value="multiply">
          Multiply
        </button>
        <button onClick={_handleUpdate} className="button" value="divide">
          Divide
        </button>
      </div>
    </div>
  );
}
export default Calculator;
