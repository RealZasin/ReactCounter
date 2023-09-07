  import { useState } from "react";
  import "./Teller.css";

 export function Teller() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="Telle">Lær deg å telle! 😃</h1>
      <p>Klikk på knappen under for å gå til neste tall.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Klikk på meg for å se neste tall: {count}
        </button>
        <br></br>
        <br></br>
        <button onClick={() => setCount((count) => (count = 0))}>
          Klikk på meg for å starte på nytt
        </button>
      </div>
      <p className="read-the-docs">Klarer du å telle til 20?</p>
    </>
  );
}

