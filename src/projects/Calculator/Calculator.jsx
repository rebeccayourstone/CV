import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [historyDisplay, setHistoryDisplay] = useState("");
  const [isEqualPressed, setIsEqualPressed] = useState(false);

  function handleDigitClick(digit) {
    if (isEqualPressed) {
      setDisplay(digit);
      clearHistoryDisplay();
      return;
    }
    appendDisplay(digit);
  }

  function appendDisplay(textToAppend) {
    let updatedDisplay;
    if (display === "0") {
      updatedDisplay = textToAppend;
    } else {
      updatedDisplay = display + textToAppend;
    }
    setDisplay(updatedDisplay);
  }

  function clearDisplay() {
    setDisplay("0");
  }

  function clearHistoryDisplay() {
    setHistoryDisplay("");
  }

  function deleteLastCharacter() {
    let updatedDisplay = display.substring(0, display.length - 1);
    if (updatedDisplay.length === 0) {
      updatedDisplay = "0";
    }
    setDisplay(updatedDisplay);
  }

  function handleOperandClick(symbol) {
    if (isNaN(parseInt(display.slice(-1)))) {
      // The last character is a symbol
      const stringWithoutLast = display.substring(0, display.length - 1);
      const updatedDisplay = stringWithoutLast + symbol;
      setDisplay(updatedDisplay);
    } else {
      // The last character is a digit
      appendDisplay(symbol);
    }
  }

  function calculate() {
    let evaluatedExpression = display
      .replace("−", "-")
      .replace("×", "*")
      .replace("÷", "/");

    if (isNaN(parseInt(display.slice(-1)))) {
      // The last character is a symbol
      evaluatedExpression = evaluatedExpression.substring(
        0,
        display.length - 1
      );
    }

    const result = eval(evaluatedExpression);
    setDisplay(result.toString());
  }

  function handleSymbolClick(symbol) {
    switch (symbol) {
      case "C":
        clearDisplay();
        clearHistoryDisplay();
        setIsEqualPressed(false);
        break;

      case "←":
        deleteLastCharacter();
        setIsEqualPressed(false);
        break;

      case "+":
      case "−":
      case "×":
      case "÷":
        handleOperandClick(symbol);
        setIsEqualPressed(false);
        break;

      case "=":
        showLatestCalculation();
        calculate();
        setIsEqualPressed(true);
        break;

      default:
        break;
    }
  }

  function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    ngntryckte(buttonValue);
  }

  function showLatestCalculation() {
    setHistoryDisplay(display + "=");
  }

  function ngntryckte(input) {
    const maybeDigit = parseInt(input);

    if (!isNaN(maybeDigit)) {
      handleDigitClick(input);
      setIsEqualPressed(false);
    } else {
      handleSymbolClick(input);
    }
  }

  return (
    <>
      <div className="calc-container-outer">
        <div className="calc-container">
          <div className="calc-calculator">
            <section className="calc-history-display">{historyDisplay}</section>
            <section className="calc-display">{display}</section>

            <div className="calc-buttons" onClick={handleButtonClick}>
              <div className="calc-top-row">
                <button className="calc-button calc-dubble-size calc-symbol">
                  C
                </button>
                <button className="calc-button calc-symbol">←</button>
                <button className="calc-button calc-orange calc-symbol">
                  ÷
                </button>
              </div>
              <div className="calc-second-row">
                <button className="calc-button">7</button>
                <button className="calc-button">8</button>
                <button className="calc-button">9</button>
                <button className="calc-button calc-orange calc-symbol">
                  ×
                </button>
              </div>
              <div className="calc-third-row">
                <button className="calc-button">4</button>
                <button className="calc-button">5</button>
                <button className="calc-button">6</button>
                <button className="calc-button calc-orange calc-symbol">
                  −
                </button>
              </div>
              <div className="calc-fourth-row">
                <button className="calc-button">1</button>
                <button className="calc-button">2</button>
                <button className="calc-button">3</button>
                <button className="calc-button calc-orange calc-symbol">
                  +
                </button>
              </div>
              <div className="calc-fifth-row">
                <button className="calc-button calc-tripple-size ">0</button>

                <button className="calc-button calc-orange calc-symbol">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
