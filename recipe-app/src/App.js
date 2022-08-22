import "./App.css";
import Header from "./Components/Header.js";
import Collections from "./Components/Collections.js";
import Collapsible from "./Components/Collapsible";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Collapsible />
      <Collapsible />
      <Collapsible />
      <Collapsible />
    </div>
  );
}

export default App;
