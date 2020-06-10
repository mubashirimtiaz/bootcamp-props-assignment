import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Foo from "./sandboxOne";

function App() {
  return (
    <div className="App">
      <Foo sayTotal="Four" sayConcate="Twenty Two" />
    </div>
  );
}

export default App;
