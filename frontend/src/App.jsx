import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }); // Empty dependency array to run useEffect only once on mount

  return (
    <>
      <h1>Jasgiigli Front-End App</h1>
      <h2>Jokes: {jokes.length}</h2>

      {jokes.map(
        (
          joke,
          index // Renamed 'jokes' to 'joke' in the map function
        ) => (
          <div key={index}>
            <h2>{joke.title}</h2>
            <h3>{joke.content}</h3>
          </div>
        )
      )}
    </>
  );
}

export default App;
