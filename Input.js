import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  return (
    <div className="App">
      {name ? <h1>Hello, {name}!</h1> : null}
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={event => {
          const { value } = event.target;
          if (/[0-9]/.test(value)) {
            setError("Names shouldn't have numbers");
          } else {
            setError(null);
          }
          setName(value);
        }}
      />
      {error != null ? <p>Error: {error}</p> : null}
      {/* --- Uncontrollable Component ---*/}
      {/*<form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.elements.name.value)
        }}
        >
        <label htmlFor="name">Your Name:</label>
        <input 
          id="name"
          name="name"
          type="text">
        </input>
        <button type="submit">Submit</button>
      </form>*/}
    </div>
  );
}
