import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = props => {
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Show;
  }
  return (
    <div className={styles.Cockpit}>
      <h1>Hi, this is a react app!</h1>
      <p>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Show/Hide Persons
      </button>
    </div>
  );
};

export default cockpit;
