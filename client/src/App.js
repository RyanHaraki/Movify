import React from "react";
import axios from "axios";
import './index.css';
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState();
  const [users, setUsers] = useState();
  const [actors, getActors] = useState();

  const get = (param) => {
    axios.get(`http://localhost:5000/api/${param}`).then((res) => {
      let response = res.data;
      console.log(response);
    });
  };

  

  return (
    <div className="App">
      <p onClick={() => get("users")}>hi</p>
    </div>
  );
};

export default App;
