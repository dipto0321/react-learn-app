import React, { useState } from "react";
import "./App.css";
import Person from "../Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "Dipto", age: Math.floor(Math.random() * 30) },
      { name: "John", age: Math.floor(Math.random() * 30) },
      { name: "Jane", age: Math.floor(Math.random() * 30) },
      { name: "Maze", age: Math.floor(Math.random() * 30) },
      { name: "Dake", age: Math.floor(Math.random() * 30) }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      person: [
        { name: "Drake", age: 25 },
        { name: "Dcosta", age: 24 },
        { name: "Juni", age: 20 },
        { name: "Janga", age: 23 },
        { name: "Dake", age: 18 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, this is a react app!</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name!</button>
      <Person
        name={personsState.person[0].name}
        age={personsState.person[0].age}
      />
      <Person
        name={personsState.person[1].name}
        age={personsState.person[1].age}
      />
      <Person
        name={personsState.person[2].name}
        age={personsState.person[2].age}
      />
      <Person
        name={personsState.person[3].name}
        age={personsState.person[3].age}
      />
      <Person
        name={personsState.person[4].name}
        age={personsState.person[4].age}
      />
    </div>
  );
};

export default app;
