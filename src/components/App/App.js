import React, { Component } from "react";
import "./App.css";
import Person from "../Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react app!</h1>
        <p>This is really working</p>
        <Person name={"Dipto"} age={Math.floor(Math.random() * 30)} />
        <Person name={"John"} age={Math.floor(Math.random() * 30)} />
        <Person name={"Jane"} age={Math.floor(Math.random() * 30)} />
        <Person name={"Maze"} age={Math.floor(Math.random() * 30)} />
        <Person name={"Dake"} age={Math.floor(Math.random() * 30)} />
      </div>
    );
  }
}

export default App;
