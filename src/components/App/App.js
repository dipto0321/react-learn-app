import React, { Component } from "react";
import "./App.css";
import Person from "../Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Dipto", age: Math.floor(Math.random() * 30) },
      { name: "John", age: Math.floor(Math.random() * 30) },
      { name: "Jane", age: Math.floor(Math.random() * 30) },
      { name: "Maze", age: Math.floor(Math.random() * 30) },
      { name: "Dake", age: Math.floor(Math.random() * 30) }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react app!</h1>
        <p>This is really working</p>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <Person
          name={this.state.person[3].name}
          age={this.state.person[3].age}
        />
        <Person
          name={this.state.person[4].name}
          age={this.state.person[4].age}
        />
      </div>
    );
  }
}

export default App;
