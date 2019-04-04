import React, { Component } from "react";
import "./App.css";
import Person from "../Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dipto", age: Math.floor(Math.random() * 30) },
      { name: "John", age: Math.floor(Math.random() * 30) },
      { name: "Jane", age: Math.floor(Math.random() * 30) },
      { name: "Maze", age: Math.floor(Math.random() * 30) },
      { name: "Dake", age: Math.floor(Math.random() * 30) }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
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
      persons: [
        { name: "Dipto", age: 25 },
        { name: "Dcosta", age: 24 },
        { name: "Juni", age: 20 },
        { name: event.target.value, age: 23 },
        { name: "Dake", age: 18 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
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

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            if (index === 2) {
              return (
                <Person
                  click={this.switchNameHandler.bind(this, "Mark")}
                  name={person.name}
                  age={person.age}
                />
              );
            } else if (index === 3) {
              return (
                <Person
                  changed={this.changedNameHandler}
                  name={person.name}
                  age={person.age}
                />
              );
            } else {
              return <Person name={person.name} age={person.age} />;
            }
          })}
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
