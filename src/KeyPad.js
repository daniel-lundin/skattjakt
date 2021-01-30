import "./KeyPad.css";

export default function KeyPad({ onClick, onDelete }) {
  return (
    <>
      <div class="row">
        <button className="cell" onClick={() => onClick(1)}>
          1
        </button>
        <button className="cell" onClick={() => onClick(2)}>
          2
        </button>
        <button className="cell" onClick={() => onClick(3)}>
          3
        </button>
      </div>
      <div class="row">
        <button className="cell" onClick={() => onClick(4)}>
          4
        </button>
        <button className="cell" onClick={() => onClick(5)}>
          5
        </button>
        <button className="cell" onClick={() => onClick(6)}>
          6
        </button>
      </div>
      <div class="row">
        <button className="cell" onClick={() => onClick(7)}>
          7
        </button>
        <button className="cell" onClick={() => onClick(8)}>
          8
        </button>
        <button className="cell" onClick={() => onClick(9)}>
          9
        </button>
      </div>
      <div class="row">
        <button className="cell" onClick={() => onClick(0)}>
          0
        </button>
        <button className="cell" onClick={() => onDelete()}>
          &lt;
        </button>
      </div>
    </>
  );
}
