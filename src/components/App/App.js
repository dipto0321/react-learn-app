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
    ],
    showPerson: false
  };

  switchNameHandler = newName => {
    this.setState({
      person: [
        { name: newName, age: 25 },
        { name: "Dcosta", age: 24 },
        { name: "Juni", age: 20 },
        { name: "Janga", age: 23 },
        { name: "Dake", age: 18 }
      ]
    });
  };

  changedNameHandler = event => {
    this.setState({
      person: [
        { name: "Dipto", age: 25 },
        { name: "Dcosta", age: 24 },
        { name: "Juni", age: 20 },
        { name: event.target.value, age: 23 },
        { name: "Dake", age: 18 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  render() {
    const styleBtn = {
      backgroundColor: "#4a69bd",
      font: "inherit",
      border: "1px solid #6a89cc",
      padding: 10,
      cursor: "pointer",
      borderRadius: 5,
      color: "#fff"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
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
            click={this.switchNameHandler.bind(this, "Jake")}
          />
          <Person
            name={this.state.person[3].name}
            age={this.state.person[3].age}
            changed={this.changedNameHandler}
          />
          <Person
            name={this.state.person[4].name}
            age={this.state.person[4].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is a react app!</h1>
        <p>This is really working</p>
        <button style={styleBtn} onClick={this.togglePersonsHandler}>
          Show/Hide Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
