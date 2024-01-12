require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000; // Use the environment port or default to 4000
app.use(express.static("dist"));
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "JasGiigli Jokes",
      content: "This is my first joke.",
    },
    {
      id: 2,
      title: "Jokes-goodsy",
      content: "This is my second joke.",
    },
    {
      id: 3,
      title: "Jokes-3",
      content: "This is my 3joke.",
    },
    {
      id: 4,
      title: "Jokes-4",
      content: "This is my 4 joke.",
    },
    {
      id: 5,
      title: "Jokes-5",
      content: "This Joke is written by JasGiigli.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app localhost: ${port}`);
});
