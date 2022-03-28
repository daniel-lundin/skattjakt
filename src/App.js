import React from "react";
import NumberDisplay from "./NumberDisplay";
import KeyPad from "./KeyPad.js";
import "./App.css";

const defaultSecret = "9257148270093361";
const defaultRevealCode = "16 08 12";
const defaultRevealText = "Koden till kassaskåpet är";
const sizeOfKeypad = 4;

function App() {
  const [numbers, setNumbers] = React.useState("");

  function handleNumber(number) {
    if (numbers.length < secretLength) {
      setNumbers((numbers) => numbers.concat(String(number)));
    }
  }

  function handleDelete() {
    setNumbers((numbers) => numbers.slice(0, numbers.length - 1));
  }

  const queryParams = new URL(window.location).searchParams;
  const rawSecret = queryParams.get('code') || defaultSecret;
  const rawSecretLength = rawSecret.length;

  const secretLength = rawSecretLength - (rawSecretLength % sizeOfKeypad);
  const secret = rawSecret.slice(0, secretLength);
  const numberOfKeyPads = Math.floor(secretLength / 4);

  const revealText = queryParams.get('revealText') || defaultRevealText;
  const revealCode = queryParams.get('revealCode') || defaultRevealCode;


  let inputStrings = [];
  for (let i=0; i<numberOfKeyPads; i++) {
    inputStrings.push(numbers.slice(i*sizeOfKeypad, sizeOfKeypad+i*sizeOfKeypad));
  }

  let secretAnswers = [];
  for (let i=0; i<numberOfKeyPads; i++) {
    secretAnswers.push(secret.slice(i*sizeOfKeypad, sizeOfKeypad+i*sizeOfKeypad));
  }
  const numberDisplays = inputStrings.map((foo, index)=> (
    <NumberDisplay
      label={`Kod ${index +1}`}
      length={sizeOfKeypad}
      numberString={inputStrings[index]}
      answer={secretAnswers[index]}
      highlighted={numbers.length > (sizeOfKeypad*index) && numbers.length < (sizeOfKeypad*index + sizeOfKeypad)}
    />
  ));

  return (
    <div className="App">
      {numbers !== secret ? (
        <div className="safe centered">
          <div className="safe__codes centered">
            {numberDisplays}
          </div>
          <div className="safe__keypad centered">
            <KeyPad onClick={handleNumber} onDelete={handleDelete} />
          </div>
        </div>
      ) : (
        <div className="hint" alt="hint" >
		<span className='reveal__code'>
      {revealText}<br/>
      {revealCode}
      </span>
	</div>
      )}
    </div>
  );
}

export default App;
