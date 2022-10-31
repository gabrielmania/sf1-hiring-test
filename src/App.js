import React from "react";
import Vanish from "./Vanish";
import Timer from "./Timer";
import List from "./List";
import Form from "./Form";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render components individually */}
        <Vanish />
        <Timer />
        <List />
        <Form />
      </header>
    </div>
  );
}
