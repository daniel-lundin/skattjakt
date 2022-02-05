import React from "react";
import NumberDisplay from "./NumberDisplay";
import KeyPad from "./KeyPad.js";
import "./App.css";

const defaultSecret = "9257148270093361";

function App() {
  const [numbers, setNumbers] = React.useState("");

  function handleNumber(number) {
    if (numbers.length < 16) {
      setNumbers((numbers) => numbers.concat(String(number)));
    }
  }

  function handleDelete() {
    setNumbers((numbers) => numbers.slice(0, numbers.length - 1));
  }

  const secret = new URL(window.location).searchParams.get('code') || defaultSecret
  const hintText = new URL(window.location).searchParams.get('hintText') || defaultSecret

  const [first, second, third, fourth] = [
    numbers.slice(0, 4),
    numbers.slice(4, 8),
    numbers.slice(8, 12),
    numbers.slice(12, 16),
  ];

  const [answer1, answer2, answer3, answer4] = [
    secret.slice(0, 4),
    secret.slice(4, 8),
    secret.slice(8, 12),
    secret.slice(12, 16),
  ];

  return (
    <div className="App">
      {numbers !== secret ? (
        <div className="safe centered">
          <div className="safe__codes centered">
            <NumberDisplay
              label="Kod 1"
              length={4}
              numberString={first}
              answer={answer1}
              highlighted={numbers.length < 4}
            />
            <NumberDisplay
              label="Kod 2"
              length={4}
              numberString={second}
              answer={answer2}
              highlighted={numbers.length >= 4 && numbers.length < 8}
            />
            <NumberDisplay
              label="Kod 3"
              length={4}
              numberString={third}
              answer={answer3}
              highlighted={numbers.length >= 8 && numbers.length < 12}
            />
            <NumberDisplay
              label="Kod 4"
              length={4}
              numberString={fourth}
              answer={answer4}
              highlighted={numbers.length >= 12}
            />
          </div>
          <div className="safe__keypad centered">
            <KeyPad onClick={handleNumber} onDelete={handleDelete} />
          </div>
        </div>
      ) : (
        <div class="hint" alt="hint" >
		<span>{hintText}</span>
	</div>
      )}
    </div>
  );
}

export default App;
