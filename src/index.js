import React from "react";
import ReactDOM from "react-dom";
import MyList from "./MyList";
import "./index.css";

var toDos = ["Buy ice cream", "Eat the ice cream", "Go to the gym", "Eat Pizza"]


ReactDOM.render(<MyList theList={toDos}/>, document.getElementById("root"))
