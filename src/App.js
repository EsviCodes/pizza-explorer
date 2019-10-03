import React from "react";
import "./App.css";
import PizzaListContainer from "./components/PizzaListContainer";
import PizzaDetailsContainer from "./components/PizzaDetailsContainer";

function App() {
  return (
    <div className="App">
      <PizzaListContainer />
      <PizzaDetailsContainer />
    </div>
  );
}

export default App;
