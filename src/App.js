import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllCourses from "./Components/AllCourses/AllCourses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllCourses></AllCourses>
    </div>
  );
}

export default App;
