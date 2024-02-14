import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  function resetForm() {
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    location.reload();
  }

  return (
    <div className="firstContainer">
      <Header name={name} number={number} month={month} year={year} cvc={cvc} />
      <div className="secondContainer">
        <Body
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
          setName={setName}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
}

export default App;
