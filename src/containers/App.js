import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import datas from "../data/data";

class App extends Component {
  state = {
    persons: datas.persons,
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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changedNameHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
