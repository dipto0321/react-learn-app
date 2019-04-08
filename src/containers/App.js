import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";

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

  changedNameHandler = (event, id) => {
    const person = { ...this.state.persons[id] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[id] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = id => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changedNameHandler}
          />
        </div>
      );
      btnClass = styles.Show;
    }

    return (
      <div className={styles.App}>
        <h1>Hi, this is a react app!</h1>
        <p>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Show/Hide Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
