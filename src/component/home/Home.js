import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const Home = ({ name, setName }) => {
  const navigate = Navigate();
  const Categories = [
    { category: "English", value: 9 },
    { category: "French", value: 10 },
  ];

  const [categories, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!name || !categories || !difficulty) setError(true);
    navigate("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <h3>Quiz Setting</h3>

        <div className="settings__select">
          {error && <div>Please fill in the fields</div>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ marginBottom: 25 }}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
            style={{ marginBottom: 30 }}
          >
            {Categories.map(({ category, value }) => (
              <MenuItem key={value} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            style={{ marginBottom: 30 }}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </TextField>

          <Button variant="contained" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
