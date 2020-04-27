import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(event.target.elements.name.value);
        }}
      >
        <label htmlFor="name">Your Name:</label>
        <input id="name" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
