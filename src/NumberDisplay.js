import "./NumberDisplay.css";

export default function NumberDisplay({
  label,
  numberString,
  answer,
  highlighted,
  length,
}) {
  const numbers = Array.from({ length }).map((_, index) => {
    return numberString[index] ?? "-";
  });

  const correct = answer === numberString;
  return (
    <>
      <div
        className={`number-display ${
          correct ? "number-display--correct" : ""
        } ${highlighted ? "number-display--highlighted" : ""}`}
      >
        <div className="number-display__label">{label}</div>
        <div className="number-display__container">
          {numbers.map((number) => {
            return <span className="number-display__digit">{number}</span>;
          })}
        </div>
      </div>
    </>
  );
}
